import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Controller, Get, Query, UseGuards} from "@nestjs/common";
import {Roles} from "../auth/roles-auth.decorator";
import {RoleGuard} from "../auth/roles.guard";
import {DonationPointsService} from "./donation-points.service";

@ApiTags('DonationPoints')
@Controller('donationPoints')
export class DonationPointsController {
    constructor(private donationPointsService: DonationPointsService) {}

    @ApiOperation({summary: 'Get all donation points'})
    @ApiResponse({status: 200, type: [DonationPointsService]})
    @Roles('ADMIN')
    @UseGuards(RoleGuard)
    @Get()
    async getAllDonationPoints(@Query('searchFilter') searchFilter: string) {
        return await this.donationPointsService.getAllDonationPoints(searchFilter);
    }
}