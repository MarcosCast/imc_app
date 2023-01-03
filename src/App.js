import React from 'react';
import IMC from './components/Imc';
import Rodape from './components/Footer';
import './App.css';
import Conteudo from './components/Conteúdo';

function App() {
  return (   
    <React.Fragment>   
       <Conteudo />
       <IMC />
       <Rodape />
    </React.Fragment>
  );
}

export default App;
