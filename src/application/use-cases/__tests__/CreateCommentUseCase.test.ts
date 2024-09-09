import { Comment } from "../../../domain/entities/Comment";
import { FoodTruck } from "../../../domain/entities/FoodTruck";
import { ICommentRepository } from "../../../domain/repositories/ICommentRepository";
import { IFoodTruckRepository } from "../../../domain/repositories/IFoodTruckRepository";
import { CreateCommentUseCase } from "../CreateCommentUseCase";

const mockFoodTruck: FoodTruck = {
  id: "1",
  applicant: "mock food truck",
  locationDescription: "mock location description",
  address: "mock address",
  foodItems: "mock food items",
  location: "mock location",
};

const mockComment: Comment = {
  id: "123-456",
  comment: "mock content",
  createdAt: new Date(),
  updatedAt: new Date(),
  foodTruckId: "1",
};

class MockFoodTruckRepository implements IFoodTruckRepository {
  private foodTrucks: FoodTruck[] = [mockFoodTruck];

  async findAll(): Promise<FoodTruck[]> {
    return this.foodTrucks;
  }

  async findById(id: string): Promise<FoodTruck | undefined> {
    return this.foodTrucks.find((foodTruck) => foodTruck.id === id);
  }
}

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

describe("CreateCommentUseCase", () => {
  it("should create a comment", async () => {
    const mockFoodTruckRepository = new MockFoodTruckRepository();
    const mockCommentRepository = new MockCommentRepository();
    const createCommentUseCase = new CreateCommentUseCase(
      mockCommentRepository,
      mockFoodTruckRepository
    );

    const foodTruckId = "1";
    const comment = mockComment;

    const createdComment = await createCommentUseCase.execute(
      foodTruckId,
      comment
    );

    expect(createdComment).toEqual(comment);
  });
});
