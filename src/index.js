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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
const config = {
  application: {
    cors: {
      server: [
        {
          origin: process.env.FRONTEND_URL, //servidor que deseas que consuma o (*) en caso que sea acceso libre
          credentials: true,
        },
      ],
    },
  },
};
app.use(cors(config.application.cors.server));

mongoose
  .connect(dbUrl)
  .then((db) => console.log("db conectado"))
  .catch((error) => console.log(error));

app.use("/api/perros", routePerro);

app.listen(port, host, () => {
  console.log(`Servidor escuchando en ${port}`);
});
