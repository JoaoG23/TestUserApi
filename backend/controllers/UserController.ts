import { Request, Response } from 'express';
import axios from 'axios';

import Filtros from '../services/Filtros';
import Ordernagens from '../services/Ordenagens';
class UserController {
    public async listAll(req: Request, res: Response) {

      try {

        const resposta = await axios.get('https://jsonplaceholder.typicode.com/users/');
        const informacoesUsuario = resposta.data;
        const lista5Usuarios = informacoesUsuario.slice(0,5);

        let estoqueInformacoesEssenciais:object[] = [];

        Filtros.filtrarDadosUsuarios(lista5Usuarios, estoqueInformacoesEssenciais);
        Ordernagens.ordernarPorNomeUsuarios(estoqueInformacoesEssenciais);

        res.json(estoqueInformacoesEssenciais);
      } catch (error) {
        res.status(400).json(error);
        console.error(error);
      }
    }
}

export default new UserController();
