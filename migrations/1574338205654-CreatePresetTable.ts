import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePresetTable1574338205654 implements MigrationInterface {
    name = 'CreatePresetTable1574338205654'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `good` CHANGE `provider` `provider` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacturer` `manufacturer` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `category` `category` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacture_date` `manufacture_date` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `country` `country` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `created_at` `created_at` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `updated_at` `updated_at` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `provider` `provider` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacturer` `manufacturer` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `category` `category` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacture_date` `manufacture_date` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `country` `country` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `created_at` `created_at` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `updated_at` `updated_at` varchar(255) NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `good` CHANGE `updated_at` `updated_at` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `created_at` `created_at` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `country` `country` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacture_date` `manufacture_date` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `category` `category` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacturer` `manufacturer` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `provider` `provider` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `updated_at` `updated_at` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `created_at` `created_at` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `country` `country` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacture_date` `manufacture_date` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `category` `category` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `manufacturer` `manufacturer` varchar(255) NULL DEFAULT 'NULL'", undefined);
        await queryRunner.query("ALTER TABLE `good` CHANGE `provider` `provider` varchar(255) NULL DEFAULT 'NULL'", undefined);
    }

}
