import { AppModule } from "./app.module";
import express from "express";
import cors from "cors";
import "dotenv/config";

async function BootStrap() {
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:4321",
      credentials: true,
    })
  );
  const appModule = new AppModule();
  appModule.configureApp(app);
  app.listen(process.env.APP_PORT, () =>
    console.log(" server is running on port ", process.env.APP_PORT)
  );
}

BootStrap();
