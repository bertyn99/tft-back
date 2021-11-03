import express, {Request,Response,Application} from 'express';
import bodyParser from "body-parser";
import { ItemsRoutes } from "../routes/items";
import {CommonRoutes} from "../routes/common_routes"
class App {
   public app: express.Application;
   private test_routes: ItemsRoutes = new ItemsRoutes(); 
   private common: CommonRoutes= new CommonRoutes();
   constructor() {
      this.app = express();
      this.config();
      this.test_routes.route(this.app); 
      this.common.route(this.app)
   }
   private config(): void {
      // support application/json type post data
      this.app.use(express.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(express.urlencoded({ extended: false }));
   }
}
export default new App().app;