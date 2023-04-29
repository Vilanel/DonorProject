import {ApiTags} from "@nestjs/swagger";
import {Controller} from "@nestjs/common";

@ApiTags('DonationPoints')
@Controller('donationPoints')
export class DonationPointsController {}