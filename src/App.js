import React from 'react';
import './App.css';
import Header from './componentes/Header'
import Texto from './componentes/Texto';
import Logo from './componentes/Logo'
import Link from './componentes/Link'


function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Texto />
        <Link />
      </Header>
    </div>
  );
}

export default App;
