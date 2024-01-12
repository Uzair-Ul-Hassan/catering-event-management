import express, { NextFunction, Request, Response } from "express";

import {
  getAllCateringEvents,
  getCateringEventById,
  createCateringEvent,
  updateCateringEventById,
  deleteCateringEventById,
} from "../models/cateringEventModel";
import { CateringEvent } from "../types/cateringEventTypes";

export const getCateringEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const events: CateringEvent[] = await getAllCateringEvents();

    res.status(200).json({
      message: "success",
      results: events.length,
      data: { cateringEvents: events },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getCateringEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Missing id parameter");
    }

    const event: CateringEvent | null = await getCateringEventById(id);

    if (!event) {
      throw new Error("Event not found");
    }

    res.status(200).json({
      message: "success",
      data: { cateringEvent: event },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const addCateringEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { eventName, location, menuItems, clientDetails } = req.body;
    if (
      !eventName ||
      !location ||
      !menuItems ||
      menuItems.length === 0 ||
      !clientDetails
    ) {
      throw new Error("Missing required fields");
    }

    const event: CateringEvent = await createCateringEvent({
      eventName,
      location,
      menuItems,
      clientDetails,
    });

    res.status(201).json({
      message: "success",
      data: { cateringEvent: event },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateCateringEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Missing id parameter");
    }

    const event: CateringEvent | null = await getCateringEventById(id);

    if (!event) {
      throw new Error("Event not found");
    }

    const updatedEvent: CateringEvent | null = await updateCateringEventById(
      id,
      req.body
    );

    res.status(200).json({
      message: "success",
      data: { cateringEvent: updatedEvent },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteCateringEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Missing id parameter");
    }

    const event: CateringEvent | null = await getCateringEventById(id);

    if (!event) {
      throw new Error("Event not found");
    }

    await deleteCateringEventById(id);

    res.status(204).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
