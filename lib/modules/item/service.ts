import { CRUD } from '../common/model/crud';
import { IItem } from './model';
import Items from './schema';

export default class ItemService implements CRUD {

    async list(limit: number, page: number): Promise<IItem[]> {
        return await Items.find().limit(limit)
            .skip(limit * page)
            .exec();
    };
    async create(resource: IItem): Promise<any> {
        let item = await new Items(resource)
        return item.save();
    };
    async putById(id: string, resource: IItem): Promise<string> {
        const existingUser = await Items.findOneAndUpdate(
            { _id: id },
            { $set: resource },
            { new: true }
        ).exec();
        return existingUser;
    };
    async readById(id: string): Promise<IItem> {
        return await Items.findOne({ _id: id });
    };
    async deleteById(id: string): Promise<any> {
        return await Items.deleteOne({ _id: id }).exec();
    };
    async clearItems(): Promise<any> {
        return await Items.deleteMany();
    }



    /*     public createItem(item_params: IItem, callback: any) {
            const _session = new Items(item_params);
            _session.save(callback);
        }
    
        public filterItem(query: any, callback: any) {
           Items.findOne(query, callback);
        }
    
        public updateItem(item_params: IItem, callback: any) {
            const query = { _id: item_params._id };
            Items.findOneAndUpdate(query, item_params, callback);
        }
        
        public deleteItem(_id: String, callback: any) {
            const query = { _id: _id };
            Items.deleteOne(query, callback);
        } */

}