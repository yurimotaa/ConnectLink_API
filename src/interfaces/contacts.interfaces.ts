import { z } from "zod";
import {
  contactSchema,
  requestContactSchema,
  responseContactSchema,
} from "../schemas/contacts.schemas";

type TContact = z.infer<typeof contactSchema>;

type TContactRequest = z.infer<typeof requestContactSchema>;

type TContactResponse = z.infer<typeof responseContactSchema>;

export { TContact, TContactRequest, TContactResponse };
