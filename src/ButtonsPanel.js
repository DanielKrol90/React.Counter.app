import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {

    return (
        <div className='buttons-panel'>
            <button onClick={() => {props.buttonMethod('add');}}>ADD 1</button>
            <button onClick={() => {props.buttonMethod('reinit');}}>REINIT</button>
            <button onClick={() => {props.buttonMethod('reset')}}> RESET</button>
        </div>
    )
}

export default ButtonsPanel;