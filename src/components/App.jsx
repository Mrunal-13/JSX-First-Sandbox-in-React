import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

var userisRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userisRegistered} />
    </div>
  );
}

export default App;
