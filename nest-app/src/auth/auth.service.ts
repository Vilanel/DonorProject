import {Body, HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto, LoginUserDto} from '../users/dto/create-user.dto';
import {UsersService} from '../users/users.service';
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';
import {Roles} from "../users/enums";
import {User} from "../users/users.model";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    public async login(@Body() userDto: LoginUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    public async registration(@Body() userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);

        if (candidate) {
            throw new HttpException('User with this email is already created', HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({
            ...userDto,
            password: hashPassword,
            role: Roles.donor,
        });

        return this.generateToken(user);
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, role: user.role};
        return {token: this.jwtService.sign(payload)};
    }

    private async decodeToken(auth: string) {
        const jwt = auth.replace('Bearer ', '');
        return this.jwtService.decode(jwt, { json: true }) as { uuid: string };
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);

        if (!user) {
            throw new UnauthorizedException({message: 'Incorrect email or password'})
        }

        const passwordEquals = await bcrypt.compare(userDto.password, user.password);

        if (passwordEquals) {
            return user;
        }

        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }
}
