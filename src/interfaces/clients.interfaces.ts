import { z } from "zod";
import {
  clientSchema,
  requestClientSchema,
  responseClientSchema,
} from "../schemas/clients.schemas";

type TClient = z.infer<typeof clientSchema>;

type TClientRequest = z.infer<typeof requestClientSchema>;

type TClientResponse = z.infer<typeof responseClientSchema>;

export { TClient, TClientRequest, TClientResponse };
