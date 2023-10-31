import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
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

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
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
