import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";
import {DonationPoint} from "./donation-points.model";
import {Op} from "sequelize";

@Injectable()
export class DonationPointsService {
    constructor(@InjectModel(DonationPoint) private donationPointsService: typeof DonationPoint) {}

    async getAllDonationPoints(searchFilter: string) {
        const whereObject = searchFilter ? {address: {[Op.like]: `%${searchFilter}%`}} : {};
        return await this.donationPointsService.findAll({
            include: {all: true},
            where: {...whereObject},
        });
    }
}