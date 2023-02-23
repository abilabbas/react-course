import React from "react";

function Label(props){
  return(
    <p>
        Ini Label anak si button, {props.children}
    </p>
  );
}

export default Label;
