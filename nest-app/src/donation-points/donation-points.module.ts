import {forwardRef, Module} from '@nestjs/common';
import {DonationPointsController} from "./donation-points.controller";
import {DonationPointsService} from "./donation-points.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {DonationPoint} from "./donation-points.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [DonationPointsController],
    providers: [DonationPointsService],
    imports: [
        SequelizeModule.forFeature([DonationPoint]),
        forwardRef(() => AuthModule),
    ],
    exports: [
        DonationPointsService,
    ]
})
export class DonationPointsModule {}
