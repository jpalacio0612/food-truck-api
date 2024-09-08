import { Request, Response } from "express";
import { GetFoodTrucksUseCase } from "../../application/use-cases/GetFoodTrucksUseCase";
import { FoodTruckRepository } from "../database/repositories/FoodTruckRepository";

export class FoodTruckController {
  static async getAll(req: Request, res: Response) {
    const repository = new FoodTruckRepository();
    const useCase = new GetFoodTrucksUseCase(repository);

    try {
      const foodTrucks = await useCase.execute();
      res.status(200).json(foodTrucks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
