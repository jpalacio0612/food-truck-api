import { FoodTruck } from "../../domain/entities/FoodTruck";
import { IFoodTruckRepository } from "../../domain/repositories/IFoodTruckRepository";

export class GetFoodTrucksUseCase {
  constructor(private foodTruckRepository: IFoodTruckRepository) {}

  async execute(): Promise<FoodTruck[]> {
    return this.foodTruckRepository.findAll();
  }
}
