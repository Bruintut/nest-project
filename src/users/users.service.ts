import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PrismaService } from "src/database/PrismaService";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UsersService{

    
    constructor(private readonly prisma: PrismaService){}
    async createUser(dto: CreateUserDto){
        const saltOrRounds = 10;
       const data: UserEntity ={
        ...dto,
        password: await bcrypt.hash(dto.password, saltOrRounds)
       };

       return this.prisma.user.create({
        data,
        select:{
            name: true,
            email: true,
            password: false,
        }
       })
    }

    findAllUsers(){
        return this
   
    }

    findUserById(id: string){
        return 
    }

    updateUser(id:string, createUserDto: CreateUserDto, user: UserEntity){

        return 
    }

    removeUser(id:string, user: UserEntity){
    
    }
}