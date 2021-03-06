import mongoose from 'mongoose';
/* import debug from 'debug';

const log: debug.IDebugger = debug('app:mongoose-service'); */

class MongooseService {
    private count = 0;
    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    };

    constructor(url:string) {
        this.connectWithRetry(url);
    }

    getMongoose() {
        return mongoose;
    }

    connectWithRetry = (url:string) => {
        console.log('Attempting MongoDB connection (will retry if needed)');
        mongoose
            .connect(url, this.mongooseOptions)
            .then(() => {
                console.log('MongoDB is connected');
            })
            .catch((err) => {
                const retrySeconds = 5;
                console.log(
                    `MongoDB connection unsuccessful (will retry #${++this
                        .count} after ${retrySeconds} seconds):`,
                    err
                );
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
    };
}
export default MongooseService;