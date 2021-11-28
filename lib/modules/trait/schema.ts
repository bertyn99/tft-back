import mongoose from "mongoose";
import { ITrait, Effect } from "./model";
const Schema = mongoose.Schema

const effectSchema = new Schema({
    maxUnits: Number,
    minUnits: Number,
    style: Number,
    variables: [{ name: String, value: [Number] }]
},
    { _id: false })


const traitSchema = new Schema({
    apiName: String,
    desc: String,
    effects: [effectSchema],
    icon: String,
    name: String
});

export default mongoose.model<ITrait>('trait', traitSchema);