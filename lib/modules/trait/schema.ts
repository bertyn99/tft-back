import { model, Schema, Model } from "mongoose";
import { ITrait, Effect } from "./model";

const effectSchema = new Schema(
  {
    maxUnits: Number,
    minUnits: Number,
    style: Number,
    variables: [{ name: String, value: [Number] }],
  },
  { _id: false }
);

const traitSchema = new Schema({
  apiName: String,
  desc: String,
  effects: [effectSchema],
  icon: String,
  name: String,
  modification_notes: [
    {
      modified_on: Date,
      modified_by: String,
      modified_note: String,
    },
  ],
});

export const Trait: Model<ITrait> = model("traits", traitSchema);
