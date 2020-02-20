import React, {useState, Fragment} from 'react';
import logo from '../logo.svg';
import './Logo.css';

const Logo = (props) => {

    const [repeat, setRepeat] = useState(1)
  	
    const clickHandler = (v) => {
        setRepeat((x) => x + v);
    }

    let elements = [];
    for(let i=1;i <= repeat;i++){
        elements.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
    }
    return (
      <Fragment>
        <div> 
        {elements}
        </div>
        <div className="App-logo-buttons">
          <button disabled={repeat === 6} onClick={() => clickHandler(1)}> Logo + </button>
          <button disabled={repeat === 1} onClick={() => clickHandler(-1)}> Logo - </button>
        </div>
      </Fragment>
    );
  }

export default Logo;