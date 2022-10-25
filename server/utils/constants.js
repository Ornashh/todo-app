import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

export { PORT, DB_URL, ACCESS_TOKEN };
