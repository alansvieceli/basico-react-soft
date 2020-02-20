import React, {useState, Fragment, useEffect} from 'react';
import logo from '../logo.svg';
import './Logo.css';

const Logo = (props) => {

    const [repeat, setRepeat] = useState();
    const [countUP, setCountUp] = useState();
    const [countDow, setCountDown] = useState()

    useEffect(() => {
      setRepeat(1);
      setCountUp(0);
      setCountDown(0);
    }, []);

    useEffect(() => {
      console.log('repeat updated');
    }, [repeat]);
  	
    const clickHandler = (v) => {
        if (v > 0)
          setCountUp((x) => x + 1)
        else
          setCountDown((x) => x + 1);

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
          <button disabled={repeat === 6} onClick={() => clickHandler(1)}> Logo + ({countUP})</button>
          <button disabled={repeat === 1} onClick={() => clickHandler(-1)}> Logo - ({countDow})</button>
        </div>
      </Fragment>
    );
  }

export default Logo;