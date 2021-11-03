import { ModificationNote } from "../common/model";

export interface IItem {
    _id?: String;
    name: {
        first_name: String;
        middle_name: String;
        last_name: String;
    };
   
    modification_notes: ModificationNote[]
}