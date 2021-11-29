import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { useStyles } from "./use-styles";
import { Send } from "@mui/icons-material";
import { Message } from "./message";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";
import style from "./message-list.module.css";

export const MessageList = () => {
  const [messages, setMessages] = useState({});
  const [value, setValue] = useState("");
  const { roomId } = useParams();
  const ref = useRef(null);
  const refWrapper = useRef(null);
  useEffect(() => {
    if (refWrapper.current) {
      refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
    }
  }, [messages]);
  const styles = useStyles();

  useEffect(() => {
    const roomMessages = messages[roomId] ?? [];
    const lastMessage = roomMessages[roomMessages.length - 1];
    let timerId = null;
    if (roomMessages.length && lastMessage.author !== "Bot") {
      setTimeout(() => {
        setMessages({
          ...messages,
          [roomId]: [
            ...(messages[roomId] ?? []),
            { author: "Bot", text: "Hello from bot", id: new Date() },
          ],
        });
      }, 200);
    }

    return () => clearInterval(timerId);
  }, [messages, roomId]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const sendMessage = () => {
    if (value) {
      setMessages({
        ...messages,
        [roomId]: [
          ...(messages[roomId] ?? []),
          { author: "User", text: value, id: new Date() },
        ],
      });
      setValue("");
      ref.current.focus();
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  const roomMessages = messages[roomId] ?? [];

  return (
    <div ref={refWrapper} className={styles.wrapper}>
      {roomMessages.map((message, index) => (
        <Message message={message} key={index} />
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
