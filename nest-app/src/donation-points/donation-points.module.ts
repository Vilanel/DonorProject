import {Module} from '@nestjs/common';
import {DonationPointsController} from "./donation-points.controller";
import {DonationPointsService} from "./donation-points.service";

@Module({
    controllers: [DonationPointsController],
    providers: [DonationPointsService],
    imports: [],
    exports: [
        DonationPointsService,
    ]
})
export class DonationPointsModule {}
