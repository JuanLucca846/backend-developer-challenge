import { Request, Response } from "express";
import { Places } from "../models/Places";
import { prisma } from "../prisma/client";
import { AppError } from "../errors/AppError";

export const createPlace = async (req: Request, res: Response) => {
  const { name, slug, city, state } = req.body;
  const checkSlug = await prisma.places.findUnique({
    where: {
      slug,
    },
  });
  if (checkSlug) {
    throw new AppError("Slug Already Exists!");
  }

  const newPlace: Places = await prisma.places.create({
    data: {
      name,
      slug,
      city,
      state,
    },
  });
  return res.status(200).json(newPlace);
};

export const findAllPlaces = async (req: Request, res: Response) => {
  const allPlaces = await prisma.places.findMany();
  return res.status(200).json(allPlaces);
};

export const findPlaceById = async (req: Request, res: Response) => {
  const placeId = req.params.id;

  const findPlace = await prisma.places.findUnique({
    where: {
      id: placeId,
    },
  });

  if (findPlace) {
    return res.status(200).json(findPlace);
  } else {
    throw new AppError("This Place Does Not Exist!");
  }
};

export const updatePlace = async (req: Request, res: Response) => {
  const placeId = req.params.id;
  const { name, slug, city, state } = req.body;

  const checkIfPlaceExist = await prisma.places.findUnique({
    where: { id: placeId },
  });

  if (checkIfPlaceExist) {
    const updatedPlace = await prisma.places.update({
      where: {
        id: placeId,
      },
      data: {
        name,
        slug,
        city,
        state,
      },
    });
    return res.status(200).json(updatedPlace);
  } else {
    throw new AppError("This Place Does Not Exist!");
  }
};

export const deletePlace = async (req: Request, res: Response) => {
  const placeId = req.params.id;

  const checkIfPlaceExist = await prisma.places.findUnique({
    where: { id: placeId },
  });

  if (checkIfPlaceExist) {
    const deletedPlace = await prisma.places.delete({
      where: {
        id: placeId,
      },
    });
    return res.sendStatus(204);
  } else {
    throw new AppError("This Place Does Not Exist!");
  }
};
