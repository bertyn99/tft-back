import { ModificationNote } from "../common/model";

export interface Effects {
    health?: Number,
    armor?: Number,
    as?: Number,
    ap?: Number,
    ad?: Number,
    damage?: Number,
    bonusAd?: Number,
    magicResist?: Number,
    CritChance?: Number,
    mana?: Number,
    bonusAs?: Number,
    magicReduction?: Number,

}
export interface IItem {
    _id?: String;
    name: String;
    desc: String;
    effect: Effects,
    icon: String;
    unique: Boolean;
    from: Array<Number>;

    modification_notes?: ModificationNote[]
}