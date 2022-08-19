import React from 'react';
import Header from './components/header';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <Header>
        <h1>Listas Usuarios</h1>
        <img src='./assets/users.svg'></img>
      </Header>
      <Home></Home>
    </div>
  );
}

export default App;
