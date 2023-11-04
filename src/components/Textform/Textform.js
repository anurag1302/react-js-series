import React, { useState } from "react";
import PropTypes from "prop-types";

const Textform = (props) => {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
    let updatedText = text.toUpperCase();
    setText(updatedText);
  };

  const handleOnLoClick = () => {
    let updatedText = text.toLowerCase();
    setText(updatedText);
  };

  const handleOnCamelCaseClick = () => {
    let lowerCase = text.toLowerCase();
    let updatedText = lowerCase
      .split(" ")
      .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
    setText(updatedText);
  };

  const handleOnClearClick = () => {
    setText("");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Enter your text"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnLoClick}>
          Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleOnCamelCaseClick}
        >
          Camelcase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnClearClick}>
          Clear
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

Textform.propTypes = {
  heading: PropTypes.string,
};

export default Textform;
