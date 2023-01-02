import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports: [PrismaModule,],
    controllers: [UsersController],
    providers:[UsersService, PrismaService],
})
export class UsersModule {}