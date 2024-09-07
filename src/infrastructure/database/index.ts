import { DataSource } from "typeorm";
import { FoodTruckEntity } from "../entities/FoodTruckEntity";

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as never,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as never,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  logging: process.env.DB_LOGGING === "true",
  entities: [FoodTruckEntity],
});
