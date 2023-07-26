import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/clients.interfaces";
import { responseClientSchema } from "../../schemas/clients.schemas";

const updateClienteService = async (
  clientData: TClientRequest,
  clientId: number
): Promise<TClientResponse> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const updatedClient = await clientRepo.save({
    id: clientId,
    ...clientData,
  });

  const newClient = clientRepo.findOneBy({ id: updatedClient.id });

  const zodClient = responseClientSchema.parse(newClient);

  return zodClient;
};

export { updateClienteService };
