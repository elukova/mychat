import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { List } from "@mui/material";
import { Chat } from "./chat";

export const Chatlist = () => {
  const [chats] = useState(["room1", "room2", "room3"]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <Chat
          key={chat}
          title={chat}
          selected={selectedIndex === index}
          handleListItemClick={() => setSelectedIndex(index)}
        />
      ))}
    </List>
  );
};
