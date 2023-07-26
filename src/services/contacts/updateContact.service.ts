import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { responseContactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (
  contactData: TContactRequest,
  contactId: number
): Promise<TContactResponse> => {
  const clientRepo = AppDataSource.getRepository(Contact);

  const updatedContact = await clientRepo.save({
    id: contactId,
    ...contactData,
  });

  const newContact = clientRepo.findOneBy({ id: updatedContact.id });

  const zodContact = responseContactSchema.parse(newContact);

  return zodContact;
};
export { updateContactService };
