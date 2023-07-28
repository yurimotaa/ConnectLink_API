import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./clients.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45 })
  email: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;

  @BeforeInsert()
  updateCreatedAt() {
    this.createdAt = new Date();
  }
}
export { Contact };
