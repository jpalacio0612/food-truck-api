import { Router } from "express";
import { CommentController } from "../controllers/CommentController";

const router = Router();

router.get(
  "/comments/food-truck/:foodTruckId",
  CommentController.getAllByFoodTruckId
);

export default router;
