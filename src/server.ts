import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import placesRoutes from "./routes/Places.routes";
import { AppError } from "./errors/AppError";

const prisma = new PrismaClient();
const server = express();
const port = process.env.PORT;

server.use(express.json());
server.use(placesRoutes);
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.msg,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: `Internal Server Error - ${err.message}`,
  });
});

server.listen(port, () => {
  console.log(`Connected ${port}`);
});

export default server;
