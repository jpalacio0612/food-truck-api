import { Router } from "express";
import { FoodTruckController } from "../controllers/FoodTruckController";

const router = Router();

router.get("/food-trucks", FoodTruckController.getAll);

export default router;
