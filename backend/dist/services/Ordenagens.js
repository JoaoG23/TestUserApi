"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ordernagens {
    static ordernarPorNomeUsuarios(estoqueDadosFiltrados) {
        estoqueDadosFiltrados.sort((primeiroNome, ultimoNome) => {
            if (primeiroNome.name < ultimoNome.name) {
                return -1;
            }
            else {
                return true;
            }
        });
        return estoqueDadosFiltrados;
    }
}
exports.default = Ordernagens;
