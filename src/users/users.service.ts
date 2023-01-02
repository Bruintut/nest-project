import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UsersService{

    Users= [];
    constructor(){}
    async createUser(createUserDto: CreateUserDto){
        if (!createUserDto){
            return{
                message: 'fill in all fields'
            }
        }

        const data: UserEntity ={
            ...createUserDto,
        }

        return this.Users.push(data)
    }

    findAllUsers(){
        return this.Users;
    }

    findUserById(id: string){
        return this.Users.findIndex
    }

    updateUser(id:string, createUserDto: CreateUserDto, user: UserEntity){
        const data: Partial<UserEntity> = {...createUserDto};
        return this.Users.splice(0, 1, data);
    }

    removeUser(id:string, user: UserEntity){
    
    }
}