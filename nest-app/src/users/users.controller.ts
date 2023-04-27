import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UsersService} from './users.service';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {User} from './users.model';
import {RoleGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'User creation'})
    @ApiResponse({status: 200, type: User})
    @Roles('ADMIN')
    @UseGuards(RoleGuard)
    @Post()
    async create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    @UseGuards(RoleGuard)
    @Get()
    async getAll() {
        return await this.userService.getAllUsers();
    }


}
