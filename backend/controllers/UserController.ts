import { Request, Response } from 'express';
import axios from 'axios';
import { type } from 'os';

class UserController {
    public async listAll(req: Request, res: Response) {
      try {

        const resposta = await axios.get('https://jsonplaceholder.typicode.com/users/');
        const dadosUsuario = resposta.data;
        const dadosEssenciais = dadosUsuario;

        
        interface User {
          id:number
          name:string
          username:string
          email:string
        }

        class DadosEssenciais {

          id:number;
          name:string;
          username:string;
          email:string;

           constructor(id:number, name:string ,username:string, email:string  ){
            this.id = id;
            this.name = name;
            this.username = username;
            this.email = email;
            }
        }
        
        let estoqueDadosEssenciais:Array<object>;
        dadosEssenciais.forEach(dado => {
          // console.info(new DadosEssenciais(dado.id, dado.name, dado.username, dado.email));

          estoqueDadosEssenciais.push(new DadosEssenciais(dado.id, dado.name, dado.username, dado.email))

          

        });
        // axios.get('https://jsonplaceholder.typicode.com/users/')

        // Ordenando 
        // dados.sort((firstName:User , lastName:User) => {
        //   if (firstName.name < lastName.name) {
        //     return -1;
        //   } else {
        //     return true;
        //   }
        // })
        console.log(estoqueDadosEssenciais)
        
        res.json(estoqueDadosEssenciais);
      } catch (error) {
        res.send(error);
        console.error(error);
      }
    }
}

export default new UserController();
