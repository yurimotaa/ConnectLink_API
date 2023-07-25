import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";

const listOneClientService = async (id: number) => {
  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOne({
    where: {
      id: id,
    },
    relations: ["contacts"],
  });

  return client;
};

export { listOneClientService };
