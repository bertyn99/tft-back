import { Document } from "mongoose";
import { ModificationNote } from "../common/model";

export interface Effects {
  health?: number;
  armor?: number;
  as?: number;
  ap?: number;
  ad?: number;
  damage?: number;
  bonusAd?: number;
  magicResist?: number;
  CritChance?: number;
  mana?: number;
  bonusAs?: number;
  magicReduction?: number;
}
export interface IItem extends Document {
  name: string;
  desc: string;
  effect: Effects;
  icon: string;
  unique: boolean;
  from: number[];

  modification_notes: ModificationNote[];
}
