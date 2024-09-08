import { Comment } from "../../domain/entities/Comment";
import { ICommentRepository } from "../../domain/repositories/ICommentRepository";
import { IFoodTruckRepository } from "../../domain/repositories/IFoodTruckRepository";

export class CreateCommentUseCase {
  constructor(
    private commentRepository: ICommentRepository,
    private foodTruckRepository: IFoodTruckRepository
  ) {}

  async execute(foodTruckId: string, comment: Comment): Promise<Comment> {
    const foodTruck = await this.foodTruckRepository.findById(foodTruckId);

    if (!foodTruck) {
      throw new Error("Food truck not found");
    }

    return this.commentRepository.create(foodTruck, comment);
  }
}
