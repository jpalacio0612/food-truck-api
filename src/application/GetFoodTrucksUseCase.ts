import { FoodTruck } from "../domain/entities/FoodTruck";
import { IFoodTruckRepository } from "../domain/repositories/IFoodTruckRepository";

export class GetFoodTrucksUseCase {
  constructor(private restaurantRepository: IFoodTruckRepository) {}

  async execute(): Promise<FoodTruck[]> {
    return this.restaurantRepository.findAll();
  }
}
