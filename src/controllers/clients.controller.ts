import { Request, Response } from "express";
import { createClientService } from "../services/clients/createClient.service";
import { TClientRequest } from "../interfaces/clients.interfaces";
import { listAllClientsService } from "../services/clients/listAllClients.service";
import { listOneClientService } from "../services/clients/listOneClient.service";
import { updateClienteService } from "../services/clients/updateClient.service";
import { deleteClientService } from "../services/clients/deleteClient.service";

const createClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TClientRequest = request.body;

  const newClient = await createClientService(userData);

  return response.status(201).json(newClient);
};

const listAllClientsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clients = await listAllClientsService();

  return response.status(200).json(clients);
};

const listOneClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = parseInt(request.params.id);

  const client = await listOneClientService(id);

  return response.status(200).json(client);
};

const updateClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientData: TClientRequest = request.body;
  const clientId: number = parseInt(request.params.id);

  const newUser = await updateClienteService(clientData, clientId);

  return response.status(200).json(newUser);
};

const deleteClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const clientId: number = parseInt(request.params.id);

  await deleteClientService(clientId);

  return response.status(204).send();
};

export {
  createClientController,
  listAllClientsController,
  listOneClientController,
  updateClientController,
  deleteClientController,
};
