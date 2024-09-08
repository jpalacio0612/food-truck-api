import { Repository } from "typeorm";
import { ICommentRepository } from "../../../domain/repositories/ICommentRepository";
import { CommentEntity } from "../../entities/CommentEntity";
import { AppDataSource } from "..";
import { Comment } from "../../../domain/entities/Comment";
import { FoodTruck } from "../../../domain/entities/FoodTruck";

export class CommentRepository implements ICommentRepository {
  private commentRepository: Repository<CommentEntity>;

  constructor() {
    this.commentRepository = AppDataSource.getRepository(CommentEntity);
  }

  async findAllByFoodTruckId(foodTruckId: string): Promise<Comment[]> {
    return await this.commentRepository.find({ where: { foodTruckId } });
  }

  async create(foodTruck: FoodTruck, comment: Comment) {
    return await this.commentRepository.save({
      ...comment,
      foodTruck,
    });
  }

  async delete(id: string): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
