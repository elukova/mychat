import { Chatlist, Layout, MessageList } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ChatPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout chats={<Chatlist />} messages={<h1>Select chat...</h1>} />
        }
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<Chatlist />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
