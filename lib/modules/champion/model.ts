import { ModificationNote } from "../common/model";

export interface Ability {
    desc: String;
    icon:String;
    name:String;
    variables:[{name:String,value:[Number]}];
}

export interface Statistic {
    armor:String,
    attackSpeed:Number,
    critChance:Number,
    critMutiplier:Number,
    damage:Number,
    hp:Number,
    initialMana:Number,
    magicResist:Number,
    mana:Number,
    range:Number

}


export interface IChampion {
    _id?: String;
    name:String;
    icon:String;
    cost:Number;
    ability:Ability;
    stats:Statistic
    traits:[String]
    modification_notes: ModificationNote[]
}