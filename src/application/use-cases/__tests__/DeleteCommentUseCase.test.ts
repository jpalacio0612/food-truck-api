import { Comment } from "../../../domain/entities/Comment";
import { FoodTruck } from "../../../domain/entities/FoodTruck";
import { ICommentRepository } from "../../../domain/repositories/ICommentRepository";

import { DeleteCommentUseCase } from "../DeleteCommentUseCase";

const mockComment: Comment = {
  id: "123-456",
  comment: "mock content",
  createdAt: new Date(),
  updatedAt: new Date(),
  foodTruckId: "1",
};

class MockCommentRepository implements ICommentRepository {
  private comments: Comment[] = [mockComment];

  async create(foodTruck: FoodTruck, comment: Comment): Promise<Comment> {
    return comment;
  }

  async findAllByFoodTruckId(foodTruckId: string): Promise<Comment[]> {
    return this.comments.filter(
      (comment) => comment.foodTruckId === foodTruckId
    );
  }

  async delete(id: string): Promise<void> {
    this.comments = this.comments.filter((comment) => comment.id !== id);
  }
}

describe("DeleteCommentUseCase", () => {
  it("should delete a comment", async () => {
    const mockCommentRepository = new MockCommentRepository();
    const deleteCommentUseCase = new DeleteCommentUseCase(
      mockCommentRepository
    );

    await deleteCommentUseCase.execute(mockComment.id);

    const comments = await mockCommentRepository.findAllByFoodTruckId(
      mockComment.foodTruckId
    );

    expect(comments).toEqual([]);
  });
});
