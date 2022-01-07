import { Document } from "mongoose";
import { ModificationNote } from "../common/model";

export enum statEffect {
  healTickRate = "c9f222c0",
  hexRadius = "5cc52ba8",
  missingHealthHeal = "7b6cc2f7",
  aoeDamageReduction = "033de552",
  costIncrease = "a861afa0",
  banishDuration = "510fdb6a",
  manaDuration = "c8d95a76",
  hexRange = "9b1e8f37",
  mRShred = "fe079f34",
  manaRatio = "df6f64b9",
}
export interface Effects {
  health?: number;
  armor?: number;
  as?: number;
  ap?: number;
  ad?: number;
  damage?: number;
  bonusAd?: number;
  magicResist?: number;
  critChance?: number;
  mana?: number;
  bonusAs?: number;
  magicReduction?: number;
  healTickRate?: number;
  hexRadius?: number;
  missingHealthHeal?: number;
  aoeDamageReduction?: number;
  costIncrease?: number;
  banishDuration?: number;
  manaDuration?: number;
  attackSpeedPerStack?: number;
  hexRange?: number;
  mRShred?: number;
  manaRatio?: number;
}
export interface IItem extends Document {
  name: string;
  desc: string;
  effects: Effects;
  icon: string;
  unique: boolean;
  from: number[];

  modification_notes: ModificationNote[];
}
