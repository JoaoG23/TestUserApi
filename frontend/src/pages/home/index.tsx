import "./style.css";

import { useFetch } from "../../services/useFetch";

const Home = () => {
  type Usuario = {
    id?: number;
    name?: string;
    username?: string;
    email: string;
  };

  const {
    dados: usuarios,
    isCarregando,
    error,

  } = useFetch<Usuario[]>({
    method: "get",
    url: "/users"
  });

  console.log(usuarios);
  return (
    <section className="home">
      {error && <h3>{error?.message}</h3>}
      {isCarregando && <h3>Carregando ...</h3>}
      {usuarios?.map((usuario) => {
        return (
          <div className="card">
            <img className="imagePerfil" src="./assets/user.svg" alt="perfil"></img>
            <ul key={usuario.id}>
              <h2>{usuario.id}</h2>
              <h3>Nome: {usuario.name}</h3>
              <h4>Usuário: {usuario.username}</h4>
              <li>Email: {usuario.email}</li>
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Home;
