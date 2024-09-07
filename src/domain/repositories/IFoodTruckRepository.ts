import { FoodTruck } from "../entities/FoodTruck";

export interface IFoodTruckRepository {
  findAll(): Promise<FoodTruck[]>;
}
