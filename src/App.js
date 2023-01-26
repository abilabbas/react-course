import React from 'react';
// import Button, { Label } from './component/Button';
// import LabelComponent from './component/Label';
import './App.css';
import Increment from './component/Increment';
import Input from './component/Input';

//props => cara untuk mengirim data ke children component
// parent App.js children Button

function App() {

  return (
    <>
      {/* <Increment /> */}
      <Input />
    </>
  );
}

export default App;
