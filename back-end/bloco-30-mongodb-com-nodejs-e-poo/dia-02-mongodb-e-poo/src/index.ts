import RecordStoreController from './Controllers/RecordStore';
import RecordStore from './Interfaces/RecordStore';
import CustomRouter from './Routes/Router';
import App from './Server';

const server = new App();

const recordStoreController = new RecordStoreController();

const recordStoreRouter = new CustomRouter<RecordStore>();
recordStoreRouter.addRoute(recordStoreController);

server.addRouter(recordStoreRouter.router);

server.startServer();
