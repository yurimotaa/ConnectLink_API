import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";

const deleteClientService = async (clientId: number): Promise<void> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({ id: clientId });

  await clientRepo.delete(client?.id!);
};

export { deleteClientService };
