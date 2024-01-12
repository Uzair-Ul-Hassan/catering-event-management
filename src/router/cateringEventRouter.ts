import express, { Router } from "express";

import {
  getCateringEvents,
  getCateringEvent,
  addCateringEvent,
  updateCateringEvent,
  deleteCateringEvent,
} from "../controllers/cateringEventController";

const router: Router = express.Router();

export default (router: Router) => {
  router.route("/cateringEvents").get(getCateringEvents).post(addCateringEvent);
  router
    .route("/cateringEvents/:id")
    .get(getCateringEvent)
    .patch(updateCateringEvent)
    .delete(deleteCateringEvent);
};
