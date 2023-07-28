import { z } from "zod";
import {
  contactSchema,
  requestContactSchema,
  responseContactSchema,
  updateContactSchema,
} from "../schemas/contacts.schemas";

type TContact = z.infer<typeof contactSchema>;

type TContactRequest = z.infer<typeof requestContactSchema>;

type TContactResponse = z.infer<typeof responseContactSchema>;

type TContacttUpdate = z.infer<typeof updateContactSchema>;

export { TContact, TContactRequest, TContactResponse, TContacttUpdate };
