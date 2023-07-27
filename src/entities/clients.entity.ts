import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];

  @BeforeInsert()
  updateCreatedAt() {
    this.createdAt = new Date();
  }
}
export { Client };
