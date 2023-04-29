import {Column, DataType, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {Roles} from './enums';

interface UserCreationAttrs {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: 'customer@gmail.com', description: 'Email'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @ApiProperty({example: '123456qwe', description: 'Password'})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @ApiProperty({example: 'Наталя', description: 'First Name'})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName: string;

    @ApiProperty({example: 'Полеха', description: 'Last Name'})
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName: string;

    @ApiProperty({example: '1030222743', description: 'Birth Date (timestamp)'})
    @Column({
        type: DataType.INTEGER,
    })
    birthDate: string;

    @ApiProperty({example: '380663116067', description: 'Mobile Number (with country code, without additional characters)'})
    @Column({
        type: DataType.STRING,
    })
    mobileNumber: string;

    @ApiProperty({example: 'ADMIN', description: 'User role'})
    @Column({
        type: DataType.ENUM(...Object.values(Roles)),
        allowNull: false,
    })
    role: string;
}
