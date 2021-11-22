import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;
    if (messages.length && lastMessage.author !== "Bot") {
      setTimeout(() => {
        setMessages([...messages, { author: "Bot", text: "Hello from bot" }]);
      }, 200);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = () => {
    setMessages([...messages, { author: "User", text: value }]);
    setValue("");
  };

  return (
    <div>
      {messages.map((message) => (
        <div>{message.text}</div>
      ))}

      <input
        ref={ref}
        placeholder="Enter a message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App message="test message" />
  </React.StrictMode>,
  document.getElementById("root")
);
