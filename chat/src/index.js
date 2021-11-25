import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
// import PropTypes from "prop-types";
import { MessageList } from "./components/message-list";
import { Layout } from "./components/layout";
import { Header } from "./components/header";
import { Chatlist } from "./components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout
        header={<Header />}
        chats={<Chatlist />}
        messages={<MessageList />}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
