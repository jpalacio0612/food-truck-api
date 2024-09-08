import { Comment } from "../../domain/entities/Comment";
import { ICommentRepository } from "../../domain/repositories/iCommentRepository";

export class GetCommentsByFoodTruckId {
  constructor(private restaurantRepository: ICommentRepository) {}

  async execute(foodTruckId: string): Promise<Comment[]> {
    return this.restaurantRepository.findAllByFoodTruckId(foodTruckId);
  }
}
