import express from 'express';
import morgan from "morgan";
import { routerUser } from '../controllers/user.routes.js';
import { routerBootcamp } from '../controllers/bootcamp.routes.js';

export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.middleware();
        this.routes();    
    }

    middleware() {
        this.app.use(morgan("tiny"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));     
    }

    routes() {
        this.app.use('/api/user', routerUser);
        this.app.use('/api/bootcamp', routerBootcamp);        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
}