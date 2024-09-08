import { Comment } from "../entities/Comment";

export interface ICommentRepository {
  findAllByFoodTruckId(foodTruckId: string): Promise<Comment[]>;
}
