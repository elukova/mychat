import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChatPage } from "./pages";
import { Header } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { store } from "./store";
// import PropTypes from "prop-types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store>
      <CustomThemeProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<h1>HOME PAGE</h1>} />
              <Route path="/chat/*" element={<ChatPage />} />
              <Route path="/profile" element={<h1>PROFILE</h1>} />
              <Route path="/*" element={<h1>404 page</h1>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
