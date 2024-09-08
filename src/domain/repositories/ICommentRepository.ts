import { Comment } from "../entities/Comment";
import { FoodTruck } from "../entities/FoodTruck";

export interface ICommentRepository {
  findAllByFoodTruckId(foodTruckId: string): Promise<Comment[]>;
  create(foodTruck: FoodTruck, comment: Comment): Promise<Comment>;
}
