import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.findOneBy({ id: contactId });

  await contactRepo.delete(contact?.id!);
};

export { deleteContactService };
