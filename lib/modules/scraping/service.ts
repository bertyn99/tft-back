import axios from "axios"

//Item
import { IItem } from "../item/model";
import ItemService from "../item/service";

// Champion 
import { IChampion, Trait } from "../champion/model";
import ChampionService from "../champion/service";

export default class ScrappingService {
    public items: IItem[] = [];
    async fetchData() {
        const url = "https://raw.communitydragon.org/latest/cdragon/tft/en_us.json"

        try {
            let data: any = (await axios.get(url)).data
            return data;
        } catch (err) {
            console.log(err)
        }
    }
    parseData(data: any, model: string): any {
        if (model == 'item') {
            let items: IItem[] = []
            data.items.forEach((elm: any, i: number) => {
                let reg= new RegExp("(set4|tft4|\/radiant|\/mercenary|Light|Shadow|\/augments|WardensMail|\/spatula\/(?!set6))", "gmi");
            
               /*  if (elm.id != 88 && elm.id != 403 && elm.id != 206 && elm.id != 18 && elm.id != 68 && elm.id != 58 && elm.id != 200 && elm.id != 406 && !(elm.id == 604 && Object.keys(elm.effects).length > 0))  */
               if(!reg.test(elm.icon)){
                    let id = elm.id
                    elm._id = elm.id
                    elm.icon = "https://raw.communitydragon.org/latest/game/" + elm.icon.toLowerCase().replace('.dds', '.png')
                    delete elm.id;
                    if(items.some(item=>item._id==5)) items.push(elm)
                   
                    
                }
            });



            return items
        }
        if (model == 'champion') {
            let champions: IChampion[] = [];

            /*    data.sets['6'].champions.forEach(elm => {
                   let champion: IChampion = { ...elm }
                   champions.push(elm)
               }); */


            return champions
        }
        if (model == 'trait') {
            let traits: Trait[] = []


            return traits
        }
    }

    async saveDataToDB(model: string, data: any[]): Promise<any> {
        const service = new ItemService();
        data.forEach((elm) => {
            service.create(elm)
        })
    }
    async init() {
        let s = new ItemService()
        s.clearItems()
        let data = await this.fetchData();
        this.items = this.parseData(data, 'item')
        this.saveDataToDB("Items", this.items)
    }
}