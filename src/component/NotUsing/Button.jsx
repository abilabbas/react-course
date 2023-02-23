import React, { useState } from "react";
import style from './Button.module.css';

function Button(props){
  const [click, setClick] = useState('');
  return (
    <button onClick={()=>setClick("I'm clicked")}>
      Ok, {click}
    </button>
  );
}

function Label(){
  return(
    <p className={style.bgButton}>
      Ini Label
    </p>
  );
}

export {
  Label,
}

export default Button;
