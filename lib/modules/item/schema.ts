import { model, Schema, Model } from "mongoose";
import { ModificationNote } from "../common/model";
import { IItem } from "./model";

const itemSchema = new Schema(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    effects: {
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
    from: [{ type: Number, ref: "items" }],
    modification_notes: [
      {
        modified_on: Date,
        modified_by: String,
        modified_note: String,
      },
    ],
  },
  { _id: false }
);
/* itemSchema.pre("save", function (this: Type, next) {
  if (this._doc) {
    let doc = <IItem>this._doc;
  }
  next();
  return this;
}); */
itemSchema.index({ name: "text", desc: "text" });
export const Items: Model<IItem> = model("items", itemSchema);
