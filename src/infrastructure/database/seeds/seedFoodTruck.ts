import "dotenv/config";
import { AppDataSource } from "../";
import { FoodTruckEntity } from "../../entities/FoodTruckEntity";
import * as path from "path";
import * as csv from "csv-parser";
import * as fs from "fs";
import { FoodTruck } from "../../../domain/entities/FoodTruck";

type CsvData = {
  locationid: string;
  applicant: string;
  facilityType: string;
  cnn: string;
  locationDescription: string;
  address: string;
  blocklot: string;
  block: string;
  lot: string;
  permit: string;
  status: string;
  foodItems: string;
  x: string;
  y: string;
  latitude: string;
  longitude: string;
  schedule: string;
  dayshours: string;
  noiSent: string;
  approved: string;
  received: string;
  priorPermit: string;
  expirationDate: string;
  location: string;
};

function pascalCaseToCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function mapCsvData(result: CsvData): FoodTruck {
  const foodTruck: FoodTruck = {
    id: "",
    applicant: "",
    locationDescription: "",
    address: "",
    foodItems: "",
    location: "",
  };

  Object.keys(result).forEach((key) => {
    const newKey = pascalCaseToCamelCase(key);

    if (newKey === "locationid") {
      foodTruck["id"] = result[key];
    } else {
      foodTruck[newKey] = result[key];
    }
  });

  return foodTruck;
}

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log("Database connection initialized.");

    const foodTruckRepository = AppDataSource.getRepository(FoodTruckEntity);
    const results: FoodTruck[] = [];

    const csvFilePath = path.join(__dirname, "/data.csv");

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (data) => {
        results.push(mapCsvData(data));
      })
      .on("end", async () => {
        try {
          const savedFoodTrucks = await foodTruckRepository.save(results);
          console.log("Food trucks saved:", savedFoodTrucks);
        } catch (error) {
          console.error("An error occurred while saving food trucks:", error);
        } finally {
          await AppDataSource.destroy();
          console.log("Database connection closed.");
        }
      })
      .on("error", (error) => {
        console.error("An error occurred while reading the CSV file:", error);
      });
  } catch (error) {
    console.error(
      "An error occurred while initializing the database connection:",
      error
    );
  }
}

seed();
