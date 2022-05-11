import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const dados= {
    nome: "Priscila Da Dalt",
    empresa: "Avanade",
    site: "https://www.avanade.com",
    className: "App-link",
  };

  return (
    // JSX - JavaScript Extensible parece HTML mas não é
    <div className="App">
      <Header title="Bem Vindo!" options={dados}></Header>
    </div>
  );
}

export default App;
