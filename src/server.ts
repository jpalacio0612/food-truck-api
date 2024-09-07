import "reflect-metadata";
import "dotenv/config";
import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

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
