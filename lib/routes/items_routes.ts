//lib/routes/items_routes.ts
import { ItemController } from '../controllers/itemsController';
import { Application, Request, Response, NextFunction } from 'express';
import { CommonRoutesConfig } from './common_routes';
export class ItemsRoutes extends CommonRoutesConfig {
   controller: ItemController
   constructor(app: Application) {
      super(app, 'ItemsRoutes');
      this.controller= new ItemController
   }

   configureRoutes() {
      this.app.route(`/items`)
         .get((req: Request, res: Response) => {this.controller.index(req,res)})
         .post((req: Request, res: Response) => {this.controller.create(req,res)});

      this.app.route(`/items/:itemId`)
         .all((req: Request, res: Response, next: NextFunction) => {
            // this middleware function runs before any request to /items/:itemId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
         })
         .get((req: Request, res: Response) => {
           this.controller.getItemById(req,res);
         })
         .put((req: Request, res: Response) => {
            res.status(200).send(`PUT requested for id ${req.params.itemId}`);
         })
         .patch((req: Request, res: Response) => {
            res.status(200).send(`PATCH requested for id ${req.params.itemId}`);
         })
         .delete((req: Request, res: Response) => {
            res.status(200).send(`DELETE requested for id ${req.params.itemId}`);
         });

      return this.app;
   }

}