import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Router from "./Router";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff',
    },
    secondary: {
      light: '#83e345',
      main: '#64dd17',
      dark: '#469a10',
      contrastText: '#000',
    },
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Router />
      </ThemeProvider>
    </>
  );
}
