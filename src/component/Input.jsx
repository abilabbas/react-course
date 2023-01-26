import React, {useState} from "react";
import style from "./Input.module.css";

function Input() {
    const [value, setValue] = useState('abil');

    const handleChange = (event) => {
        // console.log(event.target.value);
        setValue(event.target.value);

    };

    const handleClick = () => {
        alert(`Halo, ${value}`);

    };


    return (
        <>
        <input className={style.inputField} onChange={handleChange} type="text" value={value} /><br />
        <button onClick={()=>handleClick()} type="button">submit</button>
        </>
    )
   
};

export default Input;
