import { z } from "zod";

const contactSchema = z.object({
  id: z.number().int(),
  name: z.string().min(1).max(45),
  email: z.string().email().max(45),
  phone: z.string(),
  clientId: z.number().int().optional(),
});

const requestContactSchema = contactSchema.omit({
  id: true,
});

const responseContactSchema = contactSchema.extend({
  createdAt: z.date(),
  client: z.unknown().optional(),
});

const arrayContactSchema = z.array(contactSchema);

export {
  contactSchema,
  requestContactSchema,
  responseContactSchema,
  arrayContactSchema,
};
