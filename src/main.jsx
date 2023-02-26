import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"
// import "materialize-css/dist/css/materialize.min.css"

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


let st1 = "Hello\nWorld"
let st2 =`Hello
World`
console.log(st1 == st2)