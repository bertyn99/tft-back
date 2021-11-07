import { ModificationNote } from "../common/model";

export interface IItem {
    _id?: String;
    name: String;
    desc:String;
    effect:{
         health?: Number,
         armor?:Number,
         as?:Number,
         ap?:Number,
         ad?:Number,
         damage?:Number,
         bonusAd?:Number,
         magicResist?:Number,
         CritChance?:Number,
         mana?:Number,
         bonusAs?:Number,
         magicReduction?:Number,

   },
   icon:String;
   unique:Boolean;
   from:Array<Number>;
   
    modification_notes: ModificationNote[]
}