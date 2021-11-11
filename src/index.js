import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Message = ({ message }) => {
  return <div>{message}</div>;
};

const App = ({ message }) => {
  return (
    <div>
      <Message message={message} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App message="test message" />
  </React.StrictMode>,
  document.getElementById("root")
);
