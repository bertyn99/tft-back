import { CommonRoutesConfig } from "routes/common_routes";
import server from "./config/app";
import env from './environment'

const PORT = env.getPort();

server.app.listen(PORT, () => {
   server.logRoute();
   console.log('Express server listening on port ' + PORT);
});