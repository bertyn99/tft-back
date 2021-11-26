import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';
import { Ability, IChampion, Statistic } from './model'
const Schema = mongoose.Schema;

const Ability = new Schema({
    desc: String,
    icon: String,
    name: String,
    variables: [{ name: String, value: [Number] }]
},
    { _id: false });

const Statistic = new Schema({
    armor: Number,
    attackSpeed: Number,
    critChance: Number,
    critMultiplier: Number,
    damage: Number,
    hp: Number,
    initialMana: Number,
    magicResist: Number,
    mana: Number,
    range: Number
},
    { _id: false })
const championSchema = new Schema({
    name: String,
    icon: String,
    cost: Number,
    ability: Ability,
    stats: Statistic,
    traits: [String],
    modification_notes: [ModificationNote]
});

export default mongoose.model<IChampion>('champions', championSchema);