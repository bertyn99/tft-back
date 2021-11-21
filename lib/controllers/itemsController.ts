import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/services/service';
import { IItem } from '../modules/item/model';
import ItemService from '../modules/item/service';
import e = require('express');

export class ItemController {

    private item_service: ItemService = new ItemService();

    async create(req: Request, res: Response) {
        /*       const item: IItem={
                   name: req.body.name,
                   desc: req.body.desc,
                   effect: {
                      ...req.body.effect
                   },
                   icon: req.body.icon,
                   unique: req.body.unique,
                   from:req.body.from
               }
        
               try{
                this.item_service.create(item); 
                  
               }catch(err){
        
               } */

    }

    async index(req: Request, res: Response) {

        try {
            let items: IItem[] = await this.item_service.list(100, 20);

            successResponse("List des items", items, res);
        } catch (err) {
            if (err) {

            }
        }

    }


    async getItemById(req: Request, res: Response) {
        try {
            let item: IItem = await this.item_service.readById(req.params.id);

            successResponse(`L'item avec l'id ${item._id}`, item, res);
        } catch (err) {
            if (err) {

            }
        }
    }

}