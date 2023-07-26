import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

const listOneContactService = async (id: number) => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.findOne({
    where: {
      id: id,
    },
    relations: ["client"],
  });

  return contact;
};

export { listOneContactService };
