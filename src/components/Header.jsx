import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../logo.svg';
import api from '../services/api';
import styled from 'styled-components';

// criando uma nova div estilizada
// funciona com qualquer tag html
const Task = styled.div`
  width: 400px;
  height: 400px;
  border: solid 1px blue;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.5s;

  &:hover{
    border-color: red;
    cursor: pointer;
    transform: rotate(360deg) scale(0.5);
    border-width: 10px;
    border-radius: 50%;
  }

  > button {
    width: 300px;
    background: none;
    border: solid 4px white;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
  }
`;

function Header(props){
  
  // Estado é informação armazenada.
  // As informações são imutáveis em React
  // 16.8 Hooks= useAlgumaCoisa, useState
  // const[getter, setter] = useState(valor inicial);

  const [company, setCompany] = useState(props.options.empresa || "Nenhuma Informada");
  const [name, setName] = useState(props.options.nome);
  const [site, setSite] = useState(props.options.site);
  const [task, setTask] = useState([]);

  // acessando API
async function getData(){
  const res = await api.get('http://127.0.0.1:5000/api/tasks');
  return await res.data;
}

  useEffect(()=>{

    // Hook que executa automaticamente, toda vez que a página é carregada - componentDidMount(). É a arrow function.
    // Executa automaticamente toda vez que um estado é alterado - componentDidUpdate(). É o array.

    // chamando função async criada acima
    async function fetchData(){
      const response = await getData();
      setTask(response);
      return response;
    }

    fetchData();
   
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
          {company} - {name} - {site}
        </a>
        <ul>

          {task.map((item)=>(
            <li key={item._id}>{item.title}</li>
            ))}
        </ul>
            <Task>
            <button onClick={(e)=> setCompany("Fiap")}>{`Mudando o nome de ${company}`}</button>
            </Task>
      </header>
    );
}

export default Header;