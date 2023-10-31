import React from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Router from "./Router";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Router />
    </>
  );
}
