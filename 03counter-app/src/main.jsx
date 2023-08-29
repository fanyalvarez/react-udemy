import React from "react";
import ReactDOM from "react-dom/client";
import { App, hola } from "./HelloApp";
import { FirstApp } from "./FirstApp";
import "./style.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={ 100 } />
    {/* <FirstApp title="Hi i am a developer"  /> */}
  </React.StrictMode>
);

// function App() {
//   //document.createElement....
//   return <h1>Hola hola</h1>;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <FirstApp title="hola propotype" subTitle={123}/> */}
//     <FirstApp title="hola soy goku!!" />
//   </React.StrictMode>
// );
