import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import QuoteBox from "./components/quoteBox";

const element = (
  <div>
    <QuoteBox />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
