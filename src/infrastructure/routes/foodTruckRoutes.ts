import { Router } from "express";
import { FoodTruckController } from "../controllers/FoodTruckController";

const router = Router();

router.get("/food-trucks", FoodTruckController.getAll);
router.get("/food-trucks/:id", FoodTruckController.getById);

export default router;
