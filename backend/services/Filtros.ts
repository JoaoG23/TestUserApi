import IUser from "../interfaces/User";
import DadosEssenciais from "../classes/DadosEssencias";

  class Filtros {
    public static filtrarDadosUsuarios(todosDadosUsuario:IUser[], estoqueDadosFiltrados:Array<object>) {
      todosDadosUsuario.forEach(dado => {
  
        let id = dado.id;
        let nome = dado.name;
        let username = dado.username;
        let email = dado.email;
        estoqueDadosFiltrados.push(new DadosEssenciais(id, nome, username, email));
      });
      return estoqueDadosFiltrados;
    }
  }

export default Filtros;


