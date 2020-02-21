import React from 'react';
import logo from '../logo.svg';
import './Logo.css';

const Logo = ({repeat}) => {
  
    let elements = [];
    for(let i=1;i <= repeat;i++){
        elements.push(<img key={i} src={logo} className="App-logo" alt="logo" />);
    }
    return (
        <div> 
        {elements}
        </div>
    );
  }

export default Logo;