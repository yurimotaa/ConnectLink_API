/*
  Warnings:

  - The primary key for the `clients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `contacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_clientId_fkey";

-- AlterTable
ALTER TABLE "clients" DROP CONSTRAINT "clients_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "clients_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "clients_id_seq";

-- AlterTable
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "clientId" SET DATA TYPE TEXT,
ADD CONSTRAINT "contacts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "contacts_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
