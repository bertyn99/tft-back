import { model, Schema, Model } from "mongoose";

import { Ability, IChampion, Statistic } from "./model";

const Ability = new Schema(
  {
    desc: String,
    icon: String,
    name: String,
    variables: [{ name: String, value: [Number] }],
  },
  { _id: false }
);

const Statistic = new Schema(
  {
    armor: Number,
    attackSpeed: Number,
    critChance: Number,
    critMultiplier: Number,
    damage: Number,
    hp: Number,
    initialMana: Number,
    magicResist: Number,
    mana: Number,
    range: Number,
  },
  { _id: false }
);
const championSchema = new Schema({
  name: String,
  icon: String,
  cost: Number,
  ability: Ability,
  stats: Statistic,
  traits: [String],
  modification_notes: [
    {
      modified_on: Date,
      modified_by: String,
      modified_note: String,
    },
  ],
});

/* championSchema.pre('save', (next) => {
  const c:any=this
  c.modification_notes.push({
    modified_on:new Date(),
    modified_by: "admin",
    modified_note: "init bdd",
  })
  next()
}) */

export const Champion: Model<IChampion> = model("champions", championSchema);
