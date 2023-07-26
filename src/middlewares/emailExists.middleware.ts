import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Client } from "../entities/clients.entity";

const emailExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const payloadBody = request.body;

  const clientRepo = AppDataSource.getRepository(Client);

  if (payloadBody.email) {
    const emailExists = await clientRepo.exist({
      where: { email: payloadBody.email },
    });

    if (emailExists) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
};

export { emailExists };
