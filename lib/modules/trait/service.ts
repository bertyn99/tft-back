import { CRUD } from "modules/common/model/crud";
import { ITrait } from "./model";
import Trait from './schema'

export default class TraitService implements CRUD {
    async list (limit: number, page: number) : Promise<any>{
        return await Trait.find().limit(limit)
        .skip(limit * page)
        .exec();
    };
   async create(resource: any): Promise<any>{
        let trait = await new Trait(resource)
        return trait.save();
    };
   async putById (id: string, resource: ITrait):Promise<any>{
        const existingTrait = await Trait.findOneAndUpdate(
            { _id: id },
            { $set: resource },
            { new: true }
        ).exec();

        return existingTrait;
    };
   async readById (id: string) : Promise<ITrait | null>{
        return await Trait.findOne({ _id: id });
    };
    async deleteById (id: string) : Promise<any>{
        return await Trait.deleteOne({ _id: id }).exec();
    };

}