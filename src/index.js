import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.js";


// function PrintName(){ // regular function
//   return <h1>Hello React Js</h1>
// }
// const PrintName = () => { //Arrow Functions
//   return <h1>Hello!This is laharika</h1>;
// };
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

