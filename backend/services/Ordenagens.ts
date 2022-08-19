import IUser from "../interfaces/User";

class Ordernagens {

    public static ordernarPorNomeUsuarios( estoqueDadosFiltrados:Array<object>) {

      type numOrBoolean = number | boolean | any ;
      estoqueDadosFiltrados.sort((primeiroNome:IUser , ultimoNome:IUser):numOrBoolean => {
            if (primeiroNome.name < ultimoNome.name) {
              return -1;
            } else {
              return true;
            }
          })

          return estoqueDadosFiltrados;
    }
}

export default Ordernagens;