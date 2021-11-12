import * as dotenv from "dotenv";

dotenv.config();
enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
    prod_environment = 'prod',
    qa_environment = 'qa'
}

class Environment {
    private environment: String;

    constructor(environment: String) {
        if(environment== '' || environment === undefined){
             this.environment = environment;
        }else{
            this.environment='dev';
        }
       
    }

    getPort(): Number {
        if (this.environment === Environments.prod_environment) {
            return 8081;
        } else if (this.environment === Environments.dev_environment) {
            return 8082;
        } else if (this.environment === Environments.qa_environment) {
            return 8083;
        } else {
            return 3000;
        }
    }

    getDBName(): string {
        if (this.environment === Environments.prod_environment) {
            return 'db_test_project_prod';
        } else if (this.environment === Environments.dev_environment) {
            return process.env.DEV_DBURL!;
        } else if (this.environment === Environments.qa_environment) {
            return 'db_test_project_qa';
        } else {
            return process.env.DEV_URL!;
        }
    }
}

export default new Environment(Environments.dev_environment);