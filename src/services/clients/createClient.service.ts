import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/clients.interfaces";
import { responseClientSchema } from "../../schemas/clients.schemas";

const createClientService = async (
  userData: TClientRequest
): Promise<TClientResponse> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client: Client = clientRepo.create(userData);

  await clientRepo.save(client);

  const clientZod: TClientResponse = responseClientSchema.parse(client);

  return clientZod;
};

export { createClientService };
