import { Document, Mongoose, Types } from "mongoose";
import { ModificationNote } from "../common/model";

export interface Ability extends Document {
    desc: String;
    icon: String;
    name: String;
    variables: [{ name: String, value: [Number] }];
}


export interface Statistic extends Document {
    armor: number;
    attackSpeed: number;
    critChance: number;
    critMultiplier: number;
    damage: number;
    hp: number;
    initialMana: number;
    magicResist: number;
    mana: number;
    range: number;
}


export interface IChampion extends Document {
    name: String;
    icon: String;
    cost: Number;
    ability: Ability;
    stats: Statistic
    traits: Types.ObjectId[]
    modification_notes: ModificationNote[]
}