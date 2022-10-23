import { useState } from 'react'
import React from 'react';
import quotes from './quotes.json'

const QuotesBox = () => {

    const changeRandom = Math.floor(Math.random() * quotes.length)
    const [ isChange, setIsChange ] = useState(changeRandom)
  
    const clickChange = () =>{
      const changeRandomIndex = Math.floor(Math.random() * quotes.length)
      setIsChange(changeRandomIndex)
    }

    const colors = [ "#800000", "#ff0000", "#800080", "#ff00ff", "#008000", "#ffff00", "#000080", "#008080", "#00ffff", "#ff7f50", "#6495ed", "#fff8dc", "#b8860b", "#8b008b", "#ff4500" ]
    const changeRandomColors = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[changeRandomColors]}`
    return (
    <div className='App' style={{color: colors[changeRandomColors]}}>
      <p><i class='bx bxs-quote-alt-left'></i>{quotes[isChange].quote}<i class='bx bxs-quote-alt-right'></i></p>
      <small>{quotes[isChange].author}</small> 
      <i class='bx bxs-chevrons-right bx-lg' onClick={clickChange}></i>
    </div>
    );
};

export default QuotesBox;