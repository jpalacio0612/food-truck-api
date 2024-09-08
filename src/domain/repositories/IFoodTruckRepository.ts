import { FoodTruck } from "../entities/FoodTruck";

export interface IFoodTruckRepository {
  findAll(): Promise<FoodTruck[]>;
  findById(id: string): Promise<FoodTruck | undefined>;
}
