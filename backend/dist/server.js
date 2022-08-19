"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
App_1.default.listen(process.env.PORT_SERVER || 3210, () => {
    console.info(`🌍 Servidor rodando na porta  ${process.env.PORT_SERVER}`);
});
