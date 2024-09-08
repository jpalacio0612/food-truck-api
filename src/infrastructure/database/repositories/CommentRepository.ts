import { Repository } from "typeorm";
import { ICommentRepository } from "../../../domain/repositories/ICommentRepository";
import { CommentEntity } from "../../entities/CommentEntity";
import { AppDataSource } from "..";
import { Comment } from "../../../domain/entities/Comment";

export class CommentRepository implements ICommentRepository {
  private commentRepository: Repository<CommentEntity>;

  constructor() {
    this.commentRepository = AppDataSource.getRepository(CommentEntity);
  }

  async findAllByFoodTruckId(foodTruckId: string): Promise<Comment[]> {
    return await this.commentRepository.find({ where: { foodTruckId } });
  }
}
