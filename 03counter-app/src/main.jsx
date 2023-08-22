import React from "react";
import ReactDOM from "react-dom/client";

import { App, hola } from "./HelloApp"; 
import { FirstApp } from "./FirstApp";
import './style.css'
// function App() {
//   //document.createElement....
//   return <h1>Hola hola</h1>;
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp title="hola propotype" subTitle={123}/>
    {/* <FirstApp title="hola soy goku!!" subTitle={124} /> */}
  </React.StrictMode> 
);
