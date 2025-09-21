import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Images from "./components/Images";
import Professionals from "./components/Professionals";
import News from "./components/News";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logo from "./components/Logo";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/images" element={<Images />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logo" element={<Logo />} />
      </Routes>
    </Router>
  );
}

export default App;
