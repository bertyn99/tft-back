import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';
import { IItem } from './model';

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    effect: {
        health: Number,
        armor: Number,
        as: Number,
        ap: Number,
        ad: Number,
        damage: Number,
        bonusAd: Number,
        magicResist: Number,
        CritChance: Number,
        mana: Number,
        bonusAs: Number,
        magicReduction: Number,


    },
    icon: String,
    unique: Boolean,
    from: [{ type: Number, ref: 'items' }],
    modification_notes: [ModificationNote]
}, { _id: false });

itemSchema.index({ name: "text", desc: "text" })
export default mongoose.model<IItem>('items', itemSchema);