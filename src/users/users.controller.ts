import { Body, Get, Param, Patch, Post } from "@nestjs/common/decorators";
import { LoggedUser } from "src/utils/logged-user.decorator";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";
import { UsersService } from "./users.service";

export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    findAllUsers() {
        return this.usersService.findAllUsers();
    }

    @Get()
    findUserById(@Param('id') id:string, email:string){
        return this.usersService.findUserById(id, email);
    }

    @Patch()
    updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
        @LoggedUser() user: UserEntity,
      ) {
        return this.usersService.updateUser(id, updateUserDto, user);
      }

    removeUser

}