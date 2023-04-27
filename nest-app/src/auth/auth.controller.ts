import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateUserDto, LoginUserDto} from '../users/dto/create-user.dto';
import {AuthService} from './auth.service';
import {User} from "../users/users.model";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Login user'})
    @ApiResponse({status: 200, type: User})
    @UsePipes(ValidationPipe)
    @Post('/login')
    async login(@Body() userDto: LoginUserDto) {
        return await this.authService.login(userDto);
    }

    @ApiOperation({summary: 'User registration'})
    @ApiResponse({status: 200, type: User})
    @UsePipes(ValidationPipe)
    @Post('/registration')
    async registration(@Body() userDto: CreateUserDto) {
        return await this.authService.registration(userDto);
    }
}
