import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Contact } from "../entities/contacts.entity";

const contactIdExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactId: number = parseInt(request.params.id);

  const contactsRepo = AppDataSource.getRepository(Contact);

  const clientExists = await contactsRepo.exist({
    where: { id: contactId },
  });

  if (!clientExists) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

export { contactIdExistsMiddleware };
