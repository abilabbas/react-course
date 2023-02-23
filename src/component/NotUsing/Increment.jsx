import React, {useState} from "react";
import "../App.css"

function Increment() {
    const [count, setCount] = useState(0);
 
  const onClickCount = (type) =>{
    const counting = type === 'increment' ? 1 : -1; //ternary operation
    if (!((count + counting) < 0)) { // count tidak boleh lebih kecil dari 0
      setCount(count + counting);
    }
  };

  return (
    <div style={{
        width: 200,
        height: '100vh',
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        margin: '0 auto',
        justifyContent: 'center',
      }}>
        <div style={{
          height: 40,
          display: 'flex',
          gap: 10,
          alignItems: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
          <button className="btnWrapper" onClick={
            () => {
              //onClickCount('decrement');
              setCount(count - 1);
            }
          }>-</button>
          <div className="counter">{count}</div>
          <button className="btnWrapper" onClick={
            () => {
              //onClickCount('increment');
              setCount(count + 1);
            }
          }>+</button>
        </div>
      </div>
  )
};
export default Increment;
