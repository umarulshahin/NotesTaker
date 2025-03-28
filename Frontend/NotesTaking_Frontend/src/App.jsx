import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Main_Layout from "./Pages/Main_Layout";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Registration from "./Components/Registration";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='register/' element={<Registration />} />
        <Route index element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App;
