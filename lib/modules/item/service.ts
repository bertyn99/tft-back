import { IItem } from './model';
import items from './schema';

export default class ItemService {
    
    public createItem(item_params: IItem, callback: any) {
        const _session = new items(item_params);
        _session.save(callback);
    }

    public filterItem(query: any, callback: any) {
       items.findOne(query, callback);
    }

    public updateItem(item_params: IItem, callback: any) {
        const query = { _id: item_params._id };
        items.findOneAndUpdate(query, item_params, callback);
    }
    
    public deleteItem(_id: String, callback: any) {
        const query = { _id: _id };
        items.deleteOne(query, callback);
    }

}