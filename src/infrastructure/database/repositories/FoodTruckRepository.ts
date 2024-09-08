import { IFoodTruckRepository } from "../../../domain/repositories/IFoodTruckRepository";
import { FoodTruckEntity } from "../../entities/FoodTruckEntity";
import { FoodTruck } from "../../../domain/entities/FoodTruck";
import { AppDataSource } from "..";
import { Repository } from "typeorm";

export class FoodTruckRepository implements IFoodTruckRepository {
  private foodTruckRepository: Repository<FoodTruckEntity>;

  constructor() {
    this.foodTruckRepository = AppDataSource.getRepository(FoodTruckEntity);
  }

  async findAll(): Promise<FoodTruck[]> {
    return await this.foodTruckRepository.find({
      relations: ["comments"],
    });
  }

  async findById(id: string): Promise<FoodTruck | undefined> {
    return await this.foodTruckRepository.findOne({
      where: { id },
      relations: ["comments"],
    });
  }
}
