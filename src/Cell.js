
import React from 'react';

import logo from './logo.svg';
import './App.css';


const Cell = ({isInitial,number,onChange}) => (
    <div onClick={(e) => {
      if(!isInitial){
        onChange((number + 1) % 5)
      }
    }} 
    className={`cell ${isInitial ? "initial" : ""}`}>
      {number != 0 && number}
    </div>
)

export default Cell;