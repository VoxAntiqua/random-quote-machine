import React, { Component } from "react";

class QuoteBox extends Component {
  state = {
    currentQuote: "",
    currentAuthor: "",
  };

  render() {
    return (
      <div id="quote-box">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default QuoteBox;
