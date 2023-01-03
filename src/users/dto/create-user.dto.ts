import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({
        description: 'User`s name address',
        example: 'email@emailcom.br',
      })
    name: string;

    @ApiProperty({
        description: 'User`s email address',
        example: 'email@emailcom.br',
      })
    email: string;

    @ApiProperty({
        description: 'User`s password address',
        example: 'senha2022',
      })
    password: string;
}