import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contacts.entity";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { responseContactSchema } from "../../schemas/contacts.schemas";

const createContactService = async (
  contactData: TContactRequest,
  clientId: number
): Promise<TContactResponse> => {
  const clientRepo = AppDataSource.getRepository(Client);
  const contactRepo = AppDataSource.getRepository(Contact);

  const client = await clientRepo.findOneBy({ id: contactData.clientId! });

  if (!client) {
    throw new Error("Client not found");
  }

  const newContact = contactRepo.create({
    ...contactData,
    client: client,
  });

  const savedContact = await contactRepo.save(newContact);

  const contactZod: TContactResponse =
    responseContactSchema.parse(savedContact);

  return contactZod;
};
export { createContactService };
