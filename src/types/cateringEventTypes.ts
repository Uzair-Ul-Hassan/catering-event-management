import { Document, Schema } from "mongoose";

interface MenuItem {
  itemName: string;
  quantity: number;
  specialRequirements?: string;
}

interface ClientDetails {
  clientName: string;
  contactNumber: string;
  email: string;
}

export interface CateringEvent extends Document {
  eventId: Schema.Types.ObjectId;
  eventName: string;
  date: Date;
  time: string;
  location: string;
  menuItems: MenuItem[];
  clientDetails: ClientDetails;
}
