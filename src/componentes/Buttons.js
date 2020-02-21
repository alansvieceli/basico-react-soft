import React, {useState} from 'react';
import './Buttons.css';

const Buttons = ({repeat, setRepeat}) => {

    const [countUP, setCountUp] = useState(0);
    const [countDow, setCountDown] = useState(0)
  	
    const clickHandler = (v) => {
        if (v > 0)
          setCountUp((x) => x + 1)
        else
          setCountDown((x) => x + 1);

        setRepeat((x) => x + v);
    }

    return (
        <div className="App-logo-buttons">
          <button disabled={repeat === 6} onClick={() => clickHandler(1)}> Logo + ({countUP})</button>
          <button disabled={repeat === 1} onClick={() => clickHandler(-1)}> Logo - ({countDow})</button>
        </div>
    );
  }

export default Buttons;