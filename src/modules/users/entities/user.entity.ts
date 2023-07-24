import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  registerDate: Date;

  constructor() {
    this.id = randomUUID();
    this.registerDate = new Date();
  }
}
