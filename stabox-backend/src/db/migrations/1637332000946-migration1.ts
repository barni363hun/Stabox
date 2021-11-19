import {MigrationInterface, QueryRunner} from "typeorm";

export class migration11637332000946 implements MigrationInterface {
    name = 'migration11637332000946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`reciever_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`package_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`postDate\` datetime NOT NULL, \`shippingDate\` datetime NOT NULL, \`size\` varchar(255) NOT NULL, \`weight\` varchar(255) NOT NULL, \`fragile\` tinyint NOT NULL, \`price\` int NOT NULL, \`currentRegion\` int NOT NULL, \`code\` varchar(255) NOT NULL, \`userId\` int NULL, \`shipperId\` int NULL, \`recieverId\` int NULL, \`fromAdressId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shipper_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`vehicle\` varchar(255) NOT NULL, \`region\` int NOT NULL, \`packagesId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transaction_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`stabucks\` int NOT NULL DEFAULT '0', \`shipperId\` int NULL, UNIQUE INDEX \`REL_170ddb4b44cab64d60e96caa0c\` (\`shipperId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`address_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`region\` int NOT NULL, \`zipCode\` int NOT NULL, \`cityName\` varchar(255) NOT NULL, \`street\` varchar(255) NOT NULL, \`houseNumber\` int NOT NULL, \`userId\` int NULL, \`recieverId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`exchange_date_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startDate\` datetime NOT NULL, \`endDate\` datetime NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`package_entity\` ADD CONSTRAINT \`FK_1b4d9df8976f8e6f3c43b7a5fe6\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`package_entity\` ADD CONSTRAINT \`FK_5a1272b1141c68f655688b7a975\` FOREIGN KEY (\`shipperId\`) REFERENCES \`shipper_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`package_entity\` ADD CONSTRAINT \`FK_c75761408b7e6d8a1af22ef0f59\` FOREIGN KEY (\`recieverId\`) REFERENCES \`reciever_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`package_entity\` ADD CONSTRAINT \`FK_6d308d979b4c0469f0c8a4649c4\` FOREIGN KEY (\`fromAdressId\`) REFERENCES \`address_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`shipper_entity\` ADD CONSTRAINT \`FK_259ee21283b4f7876d0c7886220\` FOREIGN KEY (\`packagesId\`) REFERENCES \`package_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transaction_entity\` ADD CONSTRAINT \`FK_d6703c8f1c01fde6ed20abb26eb\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_entity\` ADD CONSTRAINT \`FK_170ddb4b44cab64d60e96caa0ce\` FOREIGN KEY (\`shipperId\`) REFERENCES \`shipper_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`address_entity\` ADD CONSTRAINT \`FK_9ab5f1a587a098fe9084ee4766e\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`address_entity\` ADD CONSTRAINT \`FK_65e3d7b34ae45668c8af55e0637\` FOREIGN KEY (\`recieverId\`) REFERENCES \`reciever_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`exchange_date_entity\` ADD CONSTRAINT \`FK_6ca06c06055b059eb8a6025fd4e\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exchange_date_entity\` DROP FOREIGN KEY \`FK_6ca06c06055b059eb8a6025fd4e\``);
        await queryRunner.query(`ALTER TABLE \`address_entity\` DROP FOREIGN KEY \`FK_65e3d7b34ae45668c8af55e0637\``);
        await queryRunner.query(`ALTER TABLE \`address_entity\` DROP FOREIGN KEY \`FK_9ab5f1a587a098fe9084ee4766e\``);
        await queryRunner.query(`ALTER TABLE \`user_entity\` DROP FOREIGN KEY \`FK_170ddb4b44cab64d60e96caa0ce\``);
        await queryRunner.query(`ALTER TABLE \`transaction_entity\` DROP FOREIGN KEY \`FK_d6703c8f1c01fde6ed20abb26eb\``);
        await queryRunner.query(`ALTER TABLE \`shipper_entity\` DROP FOREIGN KEY \`FK_259ee21283b4f7876d0c7886220\``);
        await queryRunner.query(`ALTER TABLE \`package_entity\` DROP FOREIGN KEY \`FK_6d308d979b4c0469f0c8a4649c4\``);
        await queryRunner.query(`ALTER TABLE \`package_entity\` DROP FOREIGN KEY \`FK_c75761408b7e6d8a1af22ef0f59\``);
        await queryRunner.query(`ALTER TABLE \`package_entity\` DROP FOREIGN KEY \`FK_5a1272b1141c68f655688b7a975\``);
        await queryRunner.query(`ALTER TABLE \`package_entity\` DROP FOREIGN KEY \`FK_1b4d9df8976f8e6f3c43b7a5fe6\``);
        await queryRunner.query(`DROP TABLE \`exchange_date_entity\``);
        await queryRunner.query(`DROP TABLE \`address_entity\``);
        await queryRunner.query(`DROP INDEX \`REL_170ddb4b44cab64d60e96caa0c\` ON \`user_entity\``);
        await queryRunner.query(`DROP TABLE \`user_entity\``);
        await queryRunner.query(`DROP TABLE \`transaction_entity\``);
        await queryRunner.query(`DROP TABLE \`shipper_entity\``);
        await queryRunner.query(`DROP TABLE \`package_entity\``);
        await queryRunner.query(`DROP TABLE \`reciever_entity\``);
    }

}
