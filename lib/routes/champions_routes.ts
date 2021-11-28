import { ChampionController } from "../controllers/championController";
import { Application, Request, Response, NextFunction } from "express";
import { CommonRoutesConfig } from "./common_routes";



export class ChampionRoutes extends CommonRoutesConfig {
    controller: ChampionController
    constructor(app: Application) {
        super(app, 'ItemsRoutes');
        this.controller = new ChampionController
    }

    configureRoutes() {
        this.app.route(`/champions`)
            .get((req: Request, res: Response) => { this.controller.index(req, res) })
        /*           .post((req: Request, res: Response) => { this.controller.create(req, res) }); */

        this.app.route(`/champions/:championId`)
            .all((req: Request, res: Response, next: NextFunction) => {
                // this middleware function runs before any request to /champions/:itemId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get((req: Request, res: Response) => {
                this.controller.getChampById(req, res);
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