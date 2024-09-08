import { Comment } from "../../domain/entities/Comment";
import { ICommentRepository } from "../../domain/repositories/ICommentRepository";

export class GetCommentsByFoodTruckId {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(foodTruckId: string): Promise<Comment[]> {
    return this.commentRepository.findAllByFoodTruckId(foodTruckId);
  }
}
