import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrors } from "./error";
import { clientsRoutes } from "./routes/clients.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app = express();
app.use(express.json());

app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

app.use(cors({ origin: "http://127.0.0.1:5173" }));

export default app;
function cors(arg0: { origin: string }): any {
  throw new Error("Function not implemented.");
}
