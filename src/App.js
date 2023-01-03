import React from 'react';

import IMC from './components/Imc';
import Rodape from './components/Footer';
import Conteudo from './components/Conteúdo';

import './App.css';


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
