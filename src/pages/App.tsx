import React from 'react';
import Cronometro from '../Componentes/Cronometro';
import Formulario from '../Componentes/Formulario';
import Lista from '../Componentes/Lista/lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
