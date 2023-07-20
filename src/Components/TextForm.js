import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converterd to Lowercase", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  /*-----------------------------------------------------------------------*/

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <form>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Example Textarea
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              value={text}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={handleUpClick}
            type="button"
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleDownClick}
            type="button"
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleClearText}
            type="button"
          >
            Clear Text
          </button>
        </form>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter text in the textarea to preview it here"}
        </p>
      </div>
    </>
  );
}
