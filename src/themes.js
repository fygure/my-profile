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
        background: {
            paper: '#D3D3D3', // Light gray background color
            default: '#f0f0f0', // Light gray background color
        },
        text: {
            primary: '#333', // Dark gray text color
            secondary: 'rgba(0, 0, 0, 0.6)',
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
