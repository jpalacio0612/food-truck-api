import "reflect-metadata";
import "dotenv/config";
import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import foodTruckRoutes from "./infrastructure/routes/foodTruckRoutes";
import { AppDataSource } from "./infrastructure/database";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use("/api", foodTruckRoutes);

    app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });

    app
      .listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
      })
      .on("error", (err: Error) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
