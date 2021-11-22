import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { useStyles } from "./use-styles";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
// import PropTypes from "prop-types";
// import style from "./message-list.module.css";

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
    if (value) {
      setMessages([
        ...messages,
        { author: "User", text: value, id: new Date() },
      ]);
      setValue("");
      ref.current.focus();
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.wrapper}>
      {messages.map((message) => (
        <Message message={message} />
      ))}

      <Input
        fullWidth
        className={styles.input}
        ref={ref}
        placeholder="Enter a message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={sendMessage} />
          </InputAdornment>
        }
      />
    </div>
  );
};

MessageList.propTypes = {};
