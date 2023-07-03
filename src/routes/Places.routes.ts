import express from "express";
import {
  createPlace,
  deletePlace,
  findAllPlaces,
  findPlaceById,
  updatePlace,
} from "../controllers/places.controller";

const placesRoutes = express.Router();

placesRoutes.post("/places", createPlace);

placesRoutes.get("/places", findAllPlaces);

placesRoutes.get("/places/:id", findPlaceById);

placesRoutes.put("/places/:id", updatePlace);

placesRoutes.delete("/places/:id", deletePlace);

export default placesRoutes;
