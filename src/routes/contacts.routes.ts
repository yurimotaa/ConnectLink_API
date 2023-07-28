import { Router } from "express";
import { bodyValidation } from "../middlewares/bodyValidation.middleware";
import {
  requestContactSchema,
  updateContactSchema,
} from "../schemas/contacts.schemas";
import {
  createContactController,
  deleteContactController,
  listAllContactsController,
  listOneContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { contactIdExistsMiddleware } from "../middlewares/contactIdExists.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  bodyValidation(requestContactSchema),
  createContactController
);

contactsRoutes.patch(
  "/:id",
  bodyValidation(updateContactSchema),
  contactIdExistsMiddleware,
  updateContactController
);

contactsRoutes.get("", listAllContactsController);

contactsRoutes.get("/:id", contactIdExistsMiddleware, listOneContactController);

contactsRoutes.delete(
  "/:id",
  contactIdExistsMiddleware,
  deleteContactController
);

export { contactsRoutes };
