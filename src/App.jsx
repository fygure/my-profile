import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Router from './Router';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes';
import { ReactComponent as WaveDark } from './images/darkwave.svg';
import { ReactComponent as WaveLight } from './images/lightwave.svg';

export default function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme.palette.mode === 'dark' ? lightTheme : darkTheme;
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar toggleTheme={toggleTheme} />
        <Router />
        {theme.palette.mode === 'dark' ? <WaveDark /> : <WaveLight />}
      </ThemeProvider>
    </>
  );
}