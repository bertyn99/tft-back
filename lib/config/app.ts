import express, {Request,Response,Application} from 'express';
import bodyParser from "body-parser";
import { ItemsRoutes } from "../routes/items";
class App {
   public app: express.Application;
   private test_routes: ItemsRoutes = new ItemsRoutes(); 
   constructor() {
      this.app = express();
      this.config();
      this.test_routes.route(this.app); 
   }
   private config(): void {
      // support application/json type post data
      this.app.use(express.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(express.urlencoded({ extended: false }));
   }
}
export default new App().app;