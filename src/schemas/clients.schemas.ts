import { z } from "zod";

const clientSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1).max(45),
  email: z.string().email().max(45),
  phone: z.string(),
});

const requestClientSchema = clientSchema.omit({
  id: true,
});

const responseClientSchema = clientSchema.extend({
  createdAt: z.date(),
  contacts: z.array(z.unknown()).optional(),
});

const arrayClientsSchema = z.array(responseClientSchema);

const updateClientSchema = clientSchema
  .omit({
    id: true,
  })
  .partial();

export {
  clientSchema,
  arrayClientsSchema,
  requestClientSchema,
  responseClientSchema,
  updateClientSchema,
};
