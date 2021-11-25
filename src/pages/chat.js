import { Chatlist, Layout, MessageList } from "../components";
import { Routes, Route } from "react-router-dom";

export const ChatPage = () => {
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
