import { FoodTruck } from "../entities/FoodTruck";

export interface IFoodTruckRepository {
  findAll(
    limit: number | undefined,
    offset: number | undefined,
    search: string | undefined
  ): Promise<FoodTruck[]>;
  findById(id: string): Promise<FoodTruck | undefined>;
}
