import axios from "axios"

export default class ScrappingService {

    async fetchData() {
        const url = "https://raw.communitydragon.org/latest/cdragon/tft/en_us.json"

        try {
            let data: any = (await axios.get(url)).data
            return data;
        } catch (err) {
            console.log(err)
        }
    }
    parseData(data: string) {

    }


    init() {
        this.fetchData();
    }
}