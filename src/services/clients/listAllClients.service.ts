import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { TClientResponse } from "../../interfaces/clients.interfaces";
import {
  arrayClientsSchema,
  responseClientSchema,
} from "../../schemas/clients.schemas";

const listAllClientsService = async (): Promise<TClientResponse[]> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const clientsWithContacts: Array<Client> = await clientRepo.find({
    relations: ["contacts"],
  });

  const clientZod: TClientResponse[] = clientsWithContacts.map((client) => {
    return responseClientSchema.parse(client);
  });

  return clientZod;
};

export { listAllClientsService };
