import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGoodTable1574010588127 implements MigrationInterface {
    name = 'CreateGoodTable1574010588127'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `good` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `provider` varchar(255) NULL, `manufacturer` varchar(255) NULL, `category` varchar(255) NULL, `manufacture_date` varchar(255) NULL, `country` varchar(255) NULL, `created_at` varchar(255) NULL, `updated_at` varchar(255) NULL, UNIQUE INDEX `IDX_e6d5389c49d3a5572370ee4614` (`title`), UNIQUE INDEX `IDX_74f7076e267d1115895c969a32` (`description`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_74f7076e267d1115895c969a32` ON `good`", undefined);
        await queryRunner.query("DROP INDEX `IDX_e6d5389c49d3a5572370ee4614` ON `good`", undefined);
        await queryRunner.query("DROP TABLE `good`", undefined);
    }

}
