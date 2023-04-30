import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {IBusinessHours} from "./interfaces";

@Table({tableName: 'donationPoints'})
export class DonationPoint extends Model<DonationPoint> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: 'вулиця Максима Берлинського, 12', description: 'Address'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    address: string;

    @ApiProperty({example: 'Kyiv', description: 'City/Town/Village'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    city: string;

    @ApiProperty({example: '{MN: \'8:00 - 14:00\'; WD: \'8:00 - 15:00\'}', description: 'Business/working Hours'})
    @Column({
        type: DataType.JSON,
        unique: false,
        allowNull: false,
    })
    businessHours: IBusinessHours;

    @ApiProperty({example: '34', description: 'Places of reception in donation point'})
    @Column({
        type: DataType.INTEGER,
        unique: false,
        allowNull: false,
    })
    receptionPlaces: number;
}
