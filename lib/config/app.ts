import express, {Request,Response,Application} from 'express';
import bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";
import { ItemsRoutes } from "../routes/items";
import {CommonRoutes} from "../routes/common_routes"
class App {
   public app: express.Application;
   public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

   //route
   private test_routes: ItemsRoutes = new ItemsRoutes(); 
   private common: CommonRoutes= new CommonRoutes();

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.test_routes.route(this.app); 
      this.common.route(this.app)
   }
   private config(): void {
      // support application/json type post data
      this.app.use(express.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(express.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      mongoose.connect(this.mongoUrl);
   }
}

export default new App().app;