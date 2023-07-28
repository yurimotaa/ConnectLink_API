import { Router } from "express";
import { bodyValidation } from "../middlewares/bodyValidation.middleware";
import { emailExists } from "../middlewares/emailExists.middleware";
import {
  requestUserSchema,
  updateUserRequestSchema,
} from "../schemas/users.schemas";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  bodyValidation(requestUserSchema),
  emailExists,
  createUserController
);

usersRoutes.get("", ensureTokenIsValidMiddleware, getAllUsersController);

usersRoutes.patch(
  "/:id",

  bodyValidation(updateUserRequestSchema),
  ensureTokenIsValidMiddleware,
  updateUserController
);

usersRoutes.delete("/:id", ensureTokenIsValidMiddleware, deleteUserController);

export default usersRoutes;
