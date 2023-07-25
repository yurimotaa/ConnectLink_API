import { MigrationInterface, QueryRunner } from "typeorm";

export class MudaPhoneType1690325296660 implements MigrationInterface {
    name = 'MudaPhoneType1690325296660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "phone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" integer NOT NULL`);
    }

}
