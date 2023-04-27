import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsEnum, IsOptional, IsString, Length} from "class-validator";
import {
    emailValidationError,
    fieldValidationError,
    maxEmailLength,
    maxGeneralFieldLength,
    maxPasswordLength,
    minEmailLength,
    minPasswordLength,
    minRequiredFieldLength,
    passwordValidationError,
    shouldBeStringValidationError
} from "../../constants/validation";
import {Roles} from "../enums";

export class LoginUserDto {
    @ApiProperty({example: 'customer@gmail.com', description: 'Email'})
    @IsString({message: shouldBeStringValidationError})
    @IsEmail({}, {message: emailValidationError})
    @Length(minEmailLength, maxEmailLength, {message: emailValidationError})
    readonly email: string;

    @ApiProperty({example: '123456qwe', description: 'Password'})
    @IsString({message: shouldBeStringValidationError})
    @Length(minPasswordLength, maxPasswordLength, {message: passwordValidationError})
    readonly password: string;
}

export class CreateUserDto {
    @ApiProperty({example: 'customer@gmail.com', description: 'Email'})
    @IsString({message: shouldBeStringValidationError})
    @IsEmail({}, {message: emailValidationError})
    @Length(minEmailLength, maxEmailLength, {message: emailValidationError})
    readonly email: string;

    @ApiProperty({example: '123456qwe', description: 'Password'})
    @IsString({message: shouldBeStringValidationError})
    @Length(minPasswordLength, maxPasswordLength, {message: passwordValidationError})
    readonly password: string;

    @ApiProperty({example: 'Наталя', description: 'First Name'})
    @IsString({message: shouldBeStringValidationError})
    @Length(minRequiredFieldLength, maxGeneralFieldLength, {message: fieldValidationError(minRequiredFieldLength, maxGeneralFieldLength)})
    readonly firstName: string;

    @ApiProperty({example: 'Полеха', description: 'Last Name'})
    @IsString({message: shouldBeStringValidationError})
    @Length(minRequiredFieldLength, maxGeneralFieldLength, {message: fieldValidationError(minRequiredFieldLength, maxGeneralFieldLength)})
    readonly lastName: string;

    @ApiProperty({example: 'ADMIN', description: 'User Role'})
    @IsOptional()
    @IsString({message: shouldBeStringValidationError})
    @IsEnum(Roles)
    readonly role: string;
}