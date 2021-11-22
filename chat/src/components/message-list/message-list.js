import React, { useState, useEffect, useRef } from "react";
import { Button, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import style from "./message-list.module.css";

const useStyles = makeStyles(() => ({
  input: {
    color: "#9a9fa1",
    padding: "10px 15px",
    fontSize: "15px",
  },
}));

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const styles = useStyles();

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author !== "Bot") {
      setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", text: "Hello from bot", id: new Date() },
        ]);
      }, 200);
    }

    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = () => {
    setMessages([...messages, { author: "User", text: value, id: new Date() }]);
    setValue("");
    ref.current.focus();
  };

  return (
    <div>
      {messages.map((message) => (
        <div className={style.message}>
          <div>{message.text}</div>
          <div>{message.author}</div>
        </div>
      ))}

      <Input
        fullWidth
        className={styles.input}
        ref={ref}
        placeholder="Enter a message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
};

MessageList.propTypes = {};
