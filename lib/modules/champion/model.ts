import { Document } from "mongoose";
import { ModificationNote } from "../common/model";

export interface Ability extends Document {
    desc: String;
    icon: String;
    name: String;
    variables: [{ name: String, value: [Number] }];
}



export interface Effect extends Document {
    maxUnits:  number;
    minUnits:  number;
    style:     number;
    variables: [{ name: String, value: [Number] }];
}
export interface Trait extends Document {
    apiName: string;
    desc:    string;
    effects: Effect[];
    icon:    string;
    name:    string;
}

export interface Statistic extends Document{
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


export interface IChampion  extends Document{
    _id?: String;
    name: String;
    icon: String;
    cost: Number;
    ability: Ability;
    stats: Statistic
    traits: Trait[]
    modification_notes: ModificationNote[]
}