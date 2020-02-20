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
        <Logo repeat="6" />
        <Texto />
        <Link />
      </Header>
    </div>
  );
}

export default App;
