import express from 'express';
import cors from 'cors';
import 'dotenv/config';


import userRouters from './routers/userRouters';


class App {
    
    public express:express.Application;
    
    public constructor(){
        this.express = express();
        this.middleware();
        this.routers();
    }
    
    private middleware():void{
        this.express.use(express.json())
        this.express.use(cors())
    }
    
    private routers():void{
        this.express.use('/', userRouters);
        // this.express.use('/', express.static(path.join(__dirname,'view')))
    }
}

export default new App().express;