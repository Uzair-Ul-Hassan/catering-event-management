import path from "path";
import mongoose from "mongoose";
import request from "supertest";
import app from "../app";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../../config.env") });

beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL as string, {
    dbName: "catering-events",
  });
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/v1/cateringEvents", () => {
  it("should return all catering events", async () => {
    const res = await request(app).get("/api/v1/cateringEvents");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.cateringEvents.length).toBeGreaterThan(0);
  });
});

describe("GET /api/v1/cateringEvents/:id", () => {
  it("should return a product", async () => {
    const res = await request(app).get(
      "/api/v1/cateringEvents/65a0630a5b30b2e1b7dc43b0"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.data.cateringEvent.eventName).toBe("Event name");
  });
});

describe("POST /api/v1/cateringEvents", () => {
  it("should create a product", async () => {
    const res = await request(app)
      .post("/api/v1/cateringEvents")
      .send({
        eventName: "Product unique",
        location: "hyderabad",
        menuItems: [
          {
            itemName: "item name 1",
            quantity: 5,
          },
          {
            itemName: "item name 2",
            quantity: 23,
          },
        ],
        clientDetails: {
          clientName: "uzair",
          contactNumber: "9701318210",
          email: "test@test.com",
        },
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.data.cateringEvent.eventName).toBe("Product unique");
  });
});

describe("PATCH /api/v1/cateringEvents/:id", () => {
  it("should update a product", async () => {
    const res = await request(app)
      .patch("/api/v1/cateringEvents/65a1323629d10916f8fc9e0b")
      .send({
        eventName: "Event name updated",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.cateringEvent.eventName).toBe("Event name updated");
  });
});

describe("DELETE /api/v1/cateringEvents/:id", () => {
  it("should delete a product", async () => {
    const res = await request(app).delete(
      "/api/v1/cateringEvents/65a1324929d10916f8fc9e13"
    );
    expect(res.statusCode).toBe(204);
  });
});
