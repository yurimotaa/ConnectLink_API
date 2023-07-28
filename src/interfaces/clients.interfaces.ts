import { z } from "zod";
import {
  clientSchema,
  requestClientSchema,
  responseClientSchema,
  updateClientSchema,
} from "../schemas/clients.schemas";

type TClient = z.infer<typeof clientSchema>;

type TClientRequest = z.infer<typeof requestClientSchema>;

type TClientResponse = z.infer<typeof responseClientSchema>;

type TClientUpdate = z.infer<typeof updateClientSchema>;

export { TClient, TClientRequest, TClientResponse, TClientUpdate };
