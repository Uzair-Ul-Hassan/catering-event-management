import express, { Router } from "express";

import cateringEventRouter from "./cateringEventRouter";

const router: Router = express.Router();

export default (): Router => {
  cateringEventRouter(router);

  return router;
};
