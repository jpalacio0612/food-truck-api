import { FoodTruck } from "../../../domain/entities/FoodTruck";
import { IFoodTruckRepository } from "../../../domain/repositories/IFoodTruckRepository";
import { GetFoodTrucksUseCase } from "../GetFoodTrucksUseCase";

const mockFoodTruck: FoodTruck = {
  id: "1",
  applicant: "mock food truck",
  locationDescription: "mock location description",
  address: "mock address",
  foodItems: "mock food items",
  location: "mock location",
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

describe("GetFoodTrucksUseCase", () => {
  it("should return a list of food trucks", async () => {
    const mockFoodTruckRepository = new MockFoodTruckRepository();
    const getFoodTrucksUseCase = new GetFoodTrucksUseCase(
      mockFoodTruckRepository
    );
    const limit = 10;
    const offset = 0;
    const search = "";

    const foodTrucks = await getFoodTrucksUseCase.execute(
      limit,
      offset,
      search
    );

    expect(foodTrucks).toEqual([mockFoodTruck]);
  });
});
