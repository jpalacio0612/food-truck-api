import { Router } from "express";
import { CommentController } from "../controllers/CommentController";

const router = Router();

router.get(
  "/comments/food-truck/:foodTruckId",
  CommentController.getAllByFoodTruckId
);
router.post("/comments/food-truck/:foodTruckId", CommentController.create);
router.delete("/comments/:id", CommentController.delete);

export default router;
