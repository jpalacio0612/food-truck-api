import { IFoodTruckRepository } from "../../../domain/repositories/IFoodTruckRepository";
import { FoodTruckEntity } from "../../entities/FoodTruckEntity";
import { FoodTruck } from "../../../domain/entities/FoodTruck";
import { AppDataSource } from "..";
import { ILike, Repository } from "typeorm";

export class FoodTruckRepository implements IFoodTruckRepository {
  private foodTruckRepository: Repository<FoodTruckEntity>;

  constructor() {
    this.foodTruckRepository = AppDataSource.getRepository(FoodTruckEntity);
  }

  async findAll(
    limit: number | undefined,
    offset: number | undefined,
    search: string | undefined
  ): Promise<FoodTruck[]> {
    if (limit && offset !== undefined) {
      return await this.foodTruckRepository.find({
        relations: ["comments"],
        take: limit,
        skip: offset,
        where: {
          applicant: search ? ILike(`${search}%`) : ILike("%"),
        },
      });
    }

    return await this.foodTruckRepository.find({
      relations: ["comments"],
      where: {
        applicant: search ? ILike(`${search}%`) : ILike("%"),
      },
    });
  }

  async findById(id: string): Promise<FoodTruck | undefined> {
    return await this.foodTruckRepository.findOne({
      where: { id },
      relations: ["comments"],
    });
  }
}
