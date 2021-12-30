import { Document, Types } from "mongoose";
import { ModificationNote } from "../common/model";

export interface Ability extends Document {
  desc: string;
  icon: string;
  name: string;
  variables: [{ name: string; value: [number] }];
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
  name: string;
  icon: string;
  cost: number;
  ability: Ability;
  stats: Statistic;
  traits: Types.ObjectId[];
  modification_notes: ModificationNote[];
}
