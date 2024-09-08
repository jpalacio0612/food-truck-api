import { Request, Response } from "express";
import { GetCommentsByFoodTruckId } from "../../application/use-cases/GetCommentsByFoodTruckId";
import { CommentRepository } from "../database/repositories/CommentRepository";

export class CommentController {
  static async getAllByFoodTruckId(req: Request, res: Response) {
    const repository = new CommentRepository();
    const useCase = new GetCommentsByFoodTruckId(repository);
    const { foodTruckId } = req.params;

    try {
      const comments = await useCase.execute(foodTruckId);
      res.status(200).json(comments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
