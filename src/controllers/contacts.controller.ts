import { Request, Response } from "express";
import { TContactRequest } from "../interfaces/contacts.interfaces";
import { createContactService } from "../services/contacts/createContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { listAllContactsService } from "../services/contacts/listAllContacts.service";
import { listOneContactService } from "../services/contacts/listOneContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactData: TContactRequest = request.body;
  const clientId: number = request.body.clientId;

  const newContact = await createContactService(contactData, clientId);

  return response.status(201).json(newContact);
};

const listAllContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contacts = await listAllContactsService();

  return response.status(200).json(contacts);
};

const listOneContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const id: number = parseInt(request.params.id);

  const contact = await listOneContactService(id);

  return response.status(200).json(contact);
};

const updateContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactData: TContactRequest = request.body;
  const contactId: number = parseInt(request.params.id);

  const newContact = await updateContactService(contactData, contactId);

  return response.status(200).json(newContact);
};

const deleteContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId: number = parseInt(request.params.id);

  await deleteContactService(contactId);

  return response.status(204).send();
};

export {
  createContactController,
  deleteContactController,
  listAllContactsController,
  listOneContactController,
  updateContactController,
};
