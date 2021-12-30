import { CRUD } from "../common/model/crud";
import { IChampion } from "./model";
import { Champion } from "./schema";

export default class ChampionService implements CRUD {
  async list(limit: number, page: number): Promise<IChampion[]> {
    return await Champion.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
  async create(resource: IChampion): Promise<any> {
    const champ: IChampion = new Champion(resource);
    champ.modification_notes.push({
      modified_on: new Date(),
      modified_by: "admin",
      modified_note: "init bdd champ",
    });
    return await champ.save();
  }
  async putById(id: string, resource: IChampion): Promise<any> {
    const existingChampion = await Champion.findOneAndUpdate(
      { _id: id },
      { $set: resource },
      { new: true }
    ).exec();

    return existingChampion;
  }
  async readById(id: string): Promise<IChampion | any> {
    return await Champion.findOne({ _id: id });
  }
  async deleteById(id: string): Promise<any> {
    return await Champion.deleteOne({ _id: id }).exec();
  }

  async clearChampions(): Promise<any> {
    return await Champion.deleteMany();
  }

  async initOrUpdateChamp(c: IChampion): Promise<any> {
    let doc: IChampion | null = await Champion.findById(c._id);
    if (doc) {
      c.modification_notes = doc.modification_notes;
      c.modification_notes.push({
        modified_on: new Date(),
        modified_by: "admin",
        modified_note: "update champ",
      });
      doc = c;
      return await doc.save();
    } else {
      return this.create(c);
    }
  }
}
