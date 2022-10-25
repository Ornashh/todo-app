import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import router from "./routers/main-router.js";
import { PORT, DB_URL } from "./utils/constants.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

const start = async () => {
  try {
    await connect(DB_URL);
    app.listen(PORT || 5000, () =>
      console.log(`Сервер запущен на порту ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
