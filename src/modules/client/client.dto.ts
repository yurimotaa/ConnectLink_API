import { Contact } from '@prisma/client';

export type ClientDTO = {
  name: string;
  email: string;
  phone: string;
  createdAt?: Date | string;
  contacts?: ContactDTO[];
};

export type ContactDTO = {
  name: string;
  email: string;
  phone: string;
  createdAt?: Date | string;
  clientId?: number;
  clients?: ClientDTO[];
};
