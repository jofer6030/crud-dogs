import { Router } from "express";
import {
  createDog,
  getDogs,
  getDog,
  updateDog,
  deleteDog,
} from "../controllers/perros.controller";

const router = Router();

//Create dog
router.post("/", createDog);

//Get dogs
router.get("/", getDogs);

//Get dog
router.get("/:id", getDog);

//Update dog
router.put("/:id", updateDog);

//Delete dog
router.delete("/:id", deleteDog);

export default router;
