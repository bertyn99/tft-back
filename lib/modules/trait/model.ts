import { Document } from "mongoose";
import { ModificationNote } from "modules/common/model";

export interface Effect extends Document {
  maxUnits: number;
  minUnits: number;
  style: number;
  variables: [{ name: string; value: [number] }];
}

export interface ITrait extends Document {
  apiName: string;
  desc: string;
  effects: Effect[];
  icon: string;
  name: string;
  modification_notes: ModificationNote[];
}
