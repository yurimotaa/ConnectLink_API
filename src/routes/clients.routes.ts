import { Router } from "express";
import { bodyValidation } from "../middlewares/bodyValidation.middleware";
import {
  requestClientSchema,
  updateClientSchema,
} from "../schemas/clients.schemas";
import { emailExists } from "../middlewares/emailExists.middleware";
import {
  createClientController,
  deleteClientController,
  listAllClientsController,
  listOneClientController,
  updateClientController,
} from "../controllers/clients.controller";
import { clientIdExistsMiddleware } from "../middlewares/clientIdExists.middleware";

const clientsRoutes: Router = Router();

clientsRoutes.post(
  "",
  bodyValidation(requestClientSchema),
  emailExists,
  createClientController
);

clientsRoutes.get("", listAllClientsController);

clientsRoutes.get("/:id", clientIdExistsMiddleware, listOneClientController);

clientsRoutes.patch(
  "/:id",
  bodyValidation(updateClientSchema),
  clientIdExistsMiddleware,
  updateClientController
);

clientsRoutes.delete("/:id", clientIdExistsMiddleware, deleteClientController);

export { clientsRoutes };
