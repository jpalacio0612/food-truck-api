import { FoodTruck } from "../../domain/entities/FoodTruck";
import { IFoodTruckRepository } from "../../domain/repositories/IFoodTruckRepository";

export class GetFoodTruckByIdUseCase {
  constructor(private foodTruckRepository: IFoodTruckRepository) {}

  async execute(foodTruckId: string): Promise<FoodTruck | undefined> {
    return this.foodTruckRepository.findById(foodTruckId);
  }
}
