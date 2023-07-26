import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const bodyValidation =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction) => {
    const bodyValidated = schema.parse(request.body);

    request.body = bodyValidated;

    return next();
  };

export { bodyValidation };
