import { CRUD } from '../common/model/crud';
import { IChampion } from './model';
import Champion from "./schema"

export default class ChampionService implements CRUD {
    async list(limit: number, page: number): Promise<IChampion[]> {
        return await Champion.find().limit(limit)
            .skip(limit * page)
            .exec();
    };
    async create(resource: any): Promise<any> {

    };
    async putById(id: string, resource: IChampion): Promise<any> {
        const existingChampion = await Champion.findOneAndUpdate(
            { _id: id },
            { $set: resource },
            { new: true }
        ).exec();

        return existingChampion;
    };
    async readById(id: string): Promise<IChampion | any> {
        return await Champion.findOne({ _id: id });
    };
    async deleteById(id: string): Promise<any> {
        return await Champion.deleteOne({ _id: id }).exec();
    };

}