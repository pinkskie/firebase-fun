import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./hooks/useTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
