import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../entity/User";

export class CreateAdminUser1589772404171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.username = "admin";
        user.password = "admin";
        user.hashPassword();
        user.role = "ADMIN";

        const userRespository = getRepository(User);
        userRespository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
