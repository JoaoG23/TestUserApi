"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DadosEssencias_1 = __importDefault(require("../classes/DadosEssencias"));
class Filtros {
    static filtrarDadosUsuarios(todosDadosUsuario, estoqueDadosFiltrados) {
        todosDadosUsuario.forEach(dado => {
            let id = dado.id;
            let nome = dado.name;
            let username = dado.username;
            let email = dado.email;
            estoqueDadosFiltrados.push(new DadosEssencias_1.default(id, nome, username, email));
        });
        return estoqueDadosFiltrados;
    }
}
exports.default = Filtros;
