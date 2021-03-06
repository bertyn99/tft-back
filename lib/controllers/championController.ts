import { Request, Response } from 'express';
import { mongoError, successResponse, failureResponse } from '../modules/common/services/service';
import { IChampion } from '../modules/champion/model';
import ChampionService from '../modules/champion/service';


export class ChampionController {
    private champService: ChampionService = new ChampionService();

    /* async create(req: Request, res: Response) {

    } */

    async index(req: Request, res: Response) {
        try {
            const champions: IChampion[] = await this.champService.list(100, 0);

            successResponse("Listes des champions", champions, res);
        } catch (err) {
            if (err) {
                console.log(err)
            }
        }
    }

    async getChampById(req: Request, res: Response) {
        try {
            const champion: IChampion = await this.champService.readById(req.params.id);

            successResponse(`L'item avec l'id ${champion._id}`, champion, res);
        } catch (err) {
            if (err) {
                console.log(err)
            }
        }
    }

}