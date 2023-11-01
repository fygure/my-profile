import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#4383cc',
            main: '#1565c0',
            dark: '#0e4686',
            contrastText: '#fff',
            background: 'linear-gradient(90deg, rgba(67,131,204,1) 0%, rgba(21,101,192,1) 50%, rgba(14,70,134,1) 100%)'
        },
        secondary: {
            light: '#99dfff',
            main: '#80d8ff',
            dark: '#5997b2',
            contrastText: '#000',
        },
        background: {
            paper: '#C8C8C8', // Light gray background color
            default: '#F5F3EC', // Light gray background color
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
            background: 'linear-gradient(90deg, rgba(133,97,197,1) 0%, rgba(103,58,183,1) 50%, rgba(72,40,128,1) 100%)'
        },
        secondary: {
            light: '#83e345',
            main: '#64dd17',
            dark: '#469a10',
            contrastText: '#000',
        },
        background: {
            paper: '#202020',
            default: '#202020',
        },
    },
});
