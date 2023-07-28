import { Router } from "express";
import { requestLoginSchema } from "../schemas/login.schemas";
import { bodyValidation } from "../middlewares/bodyValidation.middleware";
import { realizeLoginController } from "../controllers/login.controllers";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  bodyValidation(requestLoginSchema),
  realizeLoginController
);

export default loginRoutes;
