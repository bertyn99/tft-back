import express from 'express';
import bodyParser from "body-parser";
import DB from '../modules/common/services/mongoose.service'
import environment from "../environment";
import { ItemsRoutes } from "../routes/items_routes";
import { CommonRoutesConfig } from "../routes/common_routes";
import ScrappingService from '../modules/scraping/service';
class App {
   public app: express.Application;
   public mongoUrl: string = `${environment.getDBName()}`;
   public data: ScrappingService = new ScrappingService();

   //route
   private routes: Array<CommonRoutesConfig> = [];

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.data.init()
      //push our different route in this route array
      this.routes.push(new ItemsRoutes(this.app))
   }
   private config(): void {
      // support application/json type post data
      this.app.use(express.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(express.urlencoded({ extended: false }));
   }

   public logRoute(): void {
      this.routes.forEach((route: CommonRoutesConfig) => {
         console.log(`Routes configured for ${route.getName()}`);
      });
   }

   private mongoSetup(): void {
      new DB(this.mongoUrl)
   }
}

export default new App();