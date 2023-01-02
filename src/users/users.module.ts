import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
    controllers: [UsersController],
    providers:[UsersService, PrismaService],
})
export class UsersModule {}