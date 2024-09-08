import { Request, Response } from "express";
import { GetCommentsByFoodTruckId } from "../../application/use-cases/GetCommentsByFoodTruckId";
import { CommentRepository } from "../database/repositories/CommentRepository";
import { FoodTruckRepository } from "../database/repositories/FoodTruckRepository";
import { CreateCommentUseCase } from "../../application/use-cases/CreateCommentUseCase";

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

  static async create(req: Request, res: Response) {
    const commentRepository = new CommentRepository();
    const foodTruckRepository = new FoodTruckRepository();
    const useCase = new CreateCommentUseCase(
      commentRepository,
      foodTruckRepository
    );

    const { foodTruckId } = req.params;
    const { body } = req;

    try {
      const comment = await useCase.execute(foodTruckId, body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
