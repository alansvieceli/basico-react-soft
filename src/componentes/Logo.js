import React from 'react';
import logo from '../logo.svg';
import './Logo.css';

const Logo = (props) => {
    let elements = [];
    for(let i=1;i<=props.repeat;i++){
        elements.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
    }
    return (
        <div> 
        {elements}
        </div>
    );
  }

Logo.defaultProps = {
  repeat: 1
}

export default Logo;