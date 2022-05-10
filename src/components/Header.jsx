import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../logo.svg';

function Header(props){
  
  // Estado é informação armazenada.
  // As informações são imutáveis em React
  // 16.8 Hooks useAlgumaCoisa, useState
  // const[getter, setter] = useState(valor inicial);

  const [company, setCompany] = useState(props.options.empresa || "Nenhuma Informada");
  const [name, setName] = useState(props.options.nome);
  const [site, setSite] = useState(props.options.site);

  useEffect(()=>{

    // Hook que executa automaticamente, toda vez que a página é carregada - componentDidMount(). É a arrow function.
    // Executa automaticamente toda vez que um estado é alterado - componentDidUpdate(). É o array.

    setCompany(company.toUpperCase());

  },[company]);

    return(
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.title}
        </p>
        <a
          className={props.options.className}
          href={props.options.site}
          target="_blank"
          rel="noopener noreferrer" //fala para google bot que não precisa acessar esse site, não abra não siga
        >
          {company}
        </a>
        <button onClick={(e)=> setCompany("Fiap")}>{`Mudando o nome de ${company}`}</button>
      </header>
    );
}

export default Header;