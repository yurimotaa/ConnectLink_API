import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import { clientsRoutes } from "./routes/clients.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
