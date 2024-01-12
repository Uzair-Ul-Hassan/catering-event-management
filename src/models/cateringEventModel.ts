import { Schema, Document, model } from "mongoose";

import { CateringEvent } from "../types/cateringEventTypes";

const cateringEventSchema: Schema<CateringEvent> = new Schema({
  eventId: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
  eventName: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  time: {
    type: String,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  menuItems: [
    {
      itemName: {
        type: String,
        required: true,
        trim: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      specialRequirements: {
        type: String,
        trim: true,
      },
    },
  ],
  clientDetails: {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
  },
});

cateringEventSchema.pre<CateringEvent>("save", function (next) {
  this.eventId = this._id;
  this.time = new Date(this.date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  next();
});

export const CateringEventModel = model<CateringEvent>(
  "CateringEvent",
  cateringEventSchema
);

export const getAllCateringEvents = async () => await CateringEventModel.find();
export const getCateringEventById = async (id: string) =>
  await CateringEventModel.findById(id);
export const createCateringEvent = async (cateringEvent: any) =>
  await CateringEventModel.create(cateringEvent);
export const updateCateringEventById = async (
  id: string,
  cateringEvent: CateringEvent
) =>
  await CateringEventModel.findByIdAndUpdate(id, cateringEvent, {
    runValidators: true,
    new: true,
  });
export const deleteCateringEventById = async (id: string) =>
  await CateringEventModel.findByIdAndDelete(id);
