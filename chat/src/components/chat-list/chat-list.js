// import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { List } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Chat } from "./chat";

export const Chatlist = () => {
  const { roomId } = useParams();
  const [chats] = useState(["room1", "room2", "room3"]);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={chat === roomId} />
        </Link>
      ))}
    </List>
  );
};
