import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { TContactResponse } from "../../interfaces/contacts.interfaces";
import { responseContactSchema } from "../../schemas/contacts.schemas";

const listAllContactsService = async (): Promise<TContactResponse[]> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contactsWithContacts: Array<Contact> = await contactRepo.find({
    relations: ["client"],
  });

  const contactZod: TContactResponse[] = contactsWithContacts.map((client) => {
    return responseContactSchema.parse(client);
  });

  return contactZod;
};

export { listAllContactsService };
