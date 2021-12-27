import axios from "axios";
import _ from "lodash";
//Item
import { IItem } from "../item/model";
import ItemService from "../item/service";

// Champion
import { IChampion } from "../champion/model";
import ChampionService from "../champion/service";

// Trait
import { ITrait } from "../trait/model";
import TraitService from "../trait/service";

export default class ScrappingService {
  public items: IItem[] = [];
  public traits: IItem[] = [];
  public champions: IChampion[] = [];
  async fetchData() {
    const url = "https://raw.communitydragon.org/latest/cdragon/tft/en_us.json";

    try {
      const data: any = (await axios.get(url)).data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  parseData(data: any, model: string): any {
    if (model == "item") {
      let items: IItem[] = [];
      data.items.forEach((elm: any, i: number) => {
        const regIcon = new RegExp(
          "(set4|tft4|/radiant|/mercenary|Light|Shadow|Shadow/S|/augments|consumable_shopreroll|HexBuff|WardensMail|/spatula/(?!set6))",
          "gmi"
        );
        const regDesc = new RegExp(
          "(tft_item_|Cost Units|Cost Unit|Consumable|[1-9] gold|Random Component|Loot goes here)",
          "gmi"
        );
        if (!regIcon.test(elm.icon) && !regDesc.test(elm.desc)) {
          const id = elm.id;
          elm._id = Math.abs(elm.id);
          elm.icon =
            "https://raw.communitydragon.org/latest/game/" +
            elm.icon.toLowerCase().replace(".dds", ".png");
          delete elm.id;
          items.push(elm);
        }
      });
      items = _.uniqBy(_.uniqBy(items, "_id"), "name");
      return items;
    }
    if (model == "champion") {
      const champions: IChampion[] = [];

      data.sets["6"].champions.forEach((elm: any) => {
        const regIc = new RegExp(
          "(TFTDebug_Dummy|TFT6_HextechDragon|TFT6_MercenaryChest|TFT6_Scarab|Mechanical Bear| Tome of traits)",
          "gmi"
        );
        if (!regIc.test(elm.icon)) {
          elm.icon =
            "https://raw.communitydragon.org/latest/game/" +
            elm.icon.toLowerCase().replace(".dds", ".png");
          delete elm.id;
          champions.push(elm);
        }
      });

      return champions;
    }
    if (model == "trait") {
      let traits: ITrait[] = [];
      data.sets["6"].traits.forEach((elm: any) => {
        elm.icon =
          "https://raw.communitydragon.org/latest/game/" +
          elm.icon.toLowerCase().replace(".dds", ".png");
        traits.push(elm);
      });
      traits = _.uniqBy(traits, "name");

      return traits;
    }
  }

  async saveDataToDB(model: string, data: any[]): Promise<any> {
    if (model == "Items") {
      const service = new ItemService();
      data.forEach((elm) => {
        service.create(elm);
      });
    }
    if (model == "Champions") {
      const service = new ChampionService();
      data.forEach((elm) => {
        service.create(elm);
      });
    }
    if (model == "Traits") {
      const service = new TraitService();
      data.forEach((elm) => {
        service.create(elm);
      });
    }
  }
  async init() {
    /*    const s = new ItemService()
           const c = new ChampionService()
           const t = new TraitService()
           s.clearItems().then((value) => console.log(`Items ${value.deletedCount}row deleted`))
   
           c.clearChampions().then((value) => console.log(`Champ ${value.deletedCount}row deleted`))
           t.clearTrait().then((value) => console.log(`Champ ${value.deletedCount}row deleted`))
   

        const data = await this.fetchData();

        this.items = this.parseData(data, 'item')
        this.traits = this.parseData(data, 'trait')
        this.champions = this.parseData(data, 'champion')
        console.log("nb d'items #" + this.items.length)
        console.log("nb de trait #" + this.traits.length)
        console.log("nb de champions #" + this.champions.length)
        this.saveDataToDB("Items", this.items);
        this.saveDataToDB("Champions", this.champions);
        this.saveDataToDB("Traits", this.traits); */
  }
}
