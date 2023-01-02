import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common/decorators';
import { Delete } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/utils/logged-user.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @ApiOperation({
    summary: 'Create a new User',
  })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  @ApiOperation({
    summary: 'Get a list of all Users from the database',
  })
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id or name')
  @ApiOperation({
    summary: 'Get a User by ID',
  })
  findUserById(@Param('id') id: string, email: string) {
    return this.usersService.findUserById(id, email);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch('id')
  @ApiOperation({
    summary: 'Use to update partial or total a User by ID',
  })
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @LoggedUser() user: UserEntity,
  ) {
    return this.usersService.updateUser(id, updateUserDto, user);
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({
    summary: 'Remove a User by ID',
  })
  removeUser(@Param('id') id: string, @LoggedUser() user: UserEntity) {
    return this.usersService.removeUser(id, user);
  }
}
