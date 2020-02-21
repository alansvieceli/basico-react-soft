import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header'
import Texto from './componentes/Texto';
import Buttons from './componentes/Buttons'
import Logo from './componentes/Logo'
import Link from './componentes/Link'


function App() {

  const [repeat, setRepeat] = useState(1);

  return (
    <div className="App">
      <Header>
        <Logo repeat={repeat}/>
        <Buttons repeat={repeat} setRepeat={setRepeat}/>
        <Texto />
        <Link />
      </Header>
    </div>
  );
}

export default App;
