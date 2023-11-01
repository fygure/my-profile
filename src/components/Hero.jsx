import React, { useEffect, useState, useMemo } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
    const theme = useTheme();
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [erasing, setErasing] = useState(false);

    const strings = useMemo(() => ['software engineer', 'app developer', 'cloud architect', 'mountaineer'], []);

    useEffect(() => {
        const typeSpeed = 100; // ms
        const eraseSpeed = 70; // ms
        const pauseDuration = 800; // ms

        const typeOrEraseText = () => {
            if (erasing) {
                if (text.length > 0) {
                    setText(text.substring(0, text.length - 1));
                } else {
                    setTimeout(() => {
                        setCurrentIndex((currentIndex + 1) % strings.length);
                        setErasing(false);
                    }, pauseDuration);
                }
            } else {
                if (text === strings[currentIndex]) {
                    setTimeout(() => {
                        setErasing(true);
                    }, pauseDuration);

                } else {
                    setText(strings[currentIndex].substring(0, text.length + 1));
                }
            }
        };

        const interval = setInterval(typeOrEraseText, erasing ? eraseSpeed : typeSpeed);
        return () => {
            clearInterval(interval);
        };
    }, [text, currentIndex, strings, erasing]);

    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '60vh' }}
        >
            {/* Left Side */}
            <Grid item xs={6}>
                <Paper elevation={3} sx={{
                    padding: '32px',
                    margin: '64px',
                    backgroundColor: theme.palette.background.paper,
                    height: '500px',
                }}>
                    <Typography variant="h5" component="div" >
                        I'm a versatile <span style={{ color: theme.palette.secondary.dark }}>{text}</span>_
                    </Typography>
                </Paper>
            </Grid>

            {/* Right Side */}
            <Grid item xs={6}>
                <Paper elevation={3} sx={{
                    padding: '32px',
                    margin: '64px',
                    backgroundColor: theme.palette.background.paper,
                    height: '500px',
                }}>
                    <Typography variant="h5" component="div">
                        Some 3D Animation Coming Soon
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
