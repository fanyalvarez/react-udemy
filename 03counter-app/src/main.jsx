import React from "react";
import ReactDOM from "react-dom/client";

import { App, hola } from "./HelloApp";

// function App() {
//   //document.createElement....
//   return <h1>Hola hola</h1>;
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
