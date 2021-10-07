import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routePerro from "./routes/perros.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const host = process.env.HOST || "0.0.0.0";
const dbUrl = process.env.MONGO_URL;

app.use(express.json());

const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: (origin, callback) => {
    const existe = whitelist.some((dominio) => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
};
app.use(cors(corsOptions));

mongoose
  .connect(dbUrl)
  .then((db) => console.log("db conectado"))
  .catch((error) => console.log(error));

app.use("/api/perros", routePerro);

app.listen(port, host, () => {
  console.log(`Servidor escuchando en ${port}`);
});
