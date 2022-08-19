"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Filtros_1 = __importDefault(require("../services/Filtros"));
const Ordenagens_1 = __importDefault(require("../services/Ordenagens"));
class UserController {
    async listAll(req, res) {
        try {
            const resposta = await axios_1.default.get('https://jsonplaceholder.typicode.com/users/');
            const informacoesUsuario = resposta.data;
            const lista5Usuarios = informacoesUsuario.slice(0, 5);
            let estoqueInformacoesEssenciais = [];
            Filtros_1.default.filtrarDadosUsuarios(lista5Usuarios, estoqueInformacoesEssenciais);
            Ordenagens_1.default.ordernarPorNomeUsuarios(estoqueInformacoesEssenciais);
            res.json(estoqueInformacoesEssenciais);
        }
        catch (error) {
            res.status(400).json(error);
            console.error(error);
        }
    }
}
exports.default = new UserController();
