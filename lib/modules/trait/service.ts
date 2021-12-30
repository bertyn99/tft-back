import { CRUD } from "modules/common/model/crud";
import { ITrait } from "./model";
import { Trait } from "./schema";

export default class TraitService implements CRUD {
  async list(limit: number, page: number): Promise<any> {
    return await Trait.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
  async create(resource: any): Promise<any> {
    const trait: ITrait = await new Trait(resource);
    trait.modification_notes.push({
      modified_on: new Date(),
      modified_by: "admin",
      modified_note: "init bdd trait",
    });
    return trait.save();
  }
  async putById(id: string, resource: ITrait): Promise<any> {
    const existingTrait = await Trait.findOneAndUpdate(
      { _id: id },
      { $set: resource },
      { new: true }
    ).exec();

    return existingTrait;
  }
  async readById(id: string): Promise<ITrait | null> {
    return await Trait.findOne({ _id: id });
  }
  async deleteById(id: string): Promise<any> {
    return await Trait.deleteOne({ _id: id }).exec();
  }

  async clearTrait(): Promise<any> {
    return await Trait.deleteMany();
  }

  async initOrUpdateTrait(t: ITrait): Promise<any> {
    let doc: ITrait | null = await Trait.findById(t._id);
    if (doc) {
      t.modification_notes = doc.modification_notes;
      t.modification_notes.push({
        modified_on: new Date(),
        modified_by: "admin",
        modified_note: "update item",
      });
      doc = t;
      return await doc.save();
    } else {
      return this.create(t);
    }
  }
}
