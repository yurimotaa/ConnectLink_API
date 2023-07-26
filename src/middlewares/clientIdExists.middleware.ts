import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/clients.entity";
import { AppError } from "../error";

const clientIdExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const clientId: number = parseInt(request.params.id);

  const clientRepo = AppDataSource.getRepository(Client);

  const clientExists = await clientRepo.exist({
    where: { id: clientId },
  });

  if (!clientExists) {
    throw new AppError("Client not found", 404);
  }

  return next();
};

export { clientIdExistsMiddleware };
