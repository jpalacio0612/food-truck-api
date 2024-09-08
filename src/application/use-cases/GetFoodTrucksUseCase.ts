import { FoodTruck } from "../../domain/entities/FoodTruck";
import { IFoodTruckRepository } from "../../domain/repositories/IFoodTruckRepository";

export class GetFoodTrucksUseCase {
  constructor(private foodTruckRepository: IFoodTruckRepository) {}

  async execute(
    limit: number | undefined,
    offset: number | undefined,
    search: string | undefined
  ): Promise<FoodTruck[]> {
    return this.foodTruckRepository.findAll(limit, offset, search);
  }
}
