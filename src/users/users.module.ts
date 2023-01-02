import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { PrismaService } from "src/database/PrismaService";
import { UsersService } from "./users.service";

@Module({
    imports: [],
    controllers: [],
    providers:[UsersService, PrismaService],
})
export class UsersModule {}