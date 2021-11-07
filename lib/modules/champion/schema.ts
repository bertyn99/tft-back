import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';
import  { Ability,Statistic} from './model'
const Schema= mongoose.Schema;

const championSchema= new Schema({
    _id?: String,
    name:String,
    icon:String,
    cost:Number,
    ability: Ability,
    stats:Statistic,
    traits:[String],
    modification_notes: ModificationNote[]
});

export default mongoose.model('champions',championSchema)