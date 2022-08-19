"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const userRouters_1 = __importDefault(require("./routers/userRouters"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.routers();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
    routers() {
        this.express.use('/users', userRouters_1.default);
        this.express.use('/', express_1.default.static(path_1.default.join(__dirname, '..', '..', 'frontend', 'build')));
    }
}
exports.default = new App().express;
