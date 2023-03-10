import {
    Body,
    Controller,
    Get,
   
    HttpCode,
   
    HttpStatus,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import {  UserEntity } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import { LoggedUser } from '../utils/logged-user.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 

  @Post() 
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Login, getting an authentication token',
  })
  login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Return a User authenticated at the moment',
  })
  @ApiBearerAuth()
  profile(@LoggedUser() user: UserEntity) {
    return { user };
  }
}