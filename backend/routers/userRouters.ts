import { Router } from 'express';
import userController from '../controllers/UserController';

const routers = Router();

routers.get('/', userController.listAll );

export default routers;