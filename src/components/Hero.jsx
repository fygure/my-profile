import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
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
        <>
            <Grid
                container
                spacing={0}
                justifyContent="center"
                alignItems="center"
                style={{
                    minHeight: '60vh',
                    overflow: 'hidden',
                }}
            >
                {/* Left Side */}
                <Grid item xs={6}>
                    <Paper elevation={3} sx={{
                        padding: '32px',
                        margin: '64px 72px 64px 64px',
                        backgroundColor: theme.palette.background.paper,
                        height: '500px',
                    }}>
                        <Typography variant="h5" component="div" paragraph sx={{ letterSpacing: '0.05em' }}>
                            Hello World, my name is
                        </Typography>
                        <Typography variant="h3" component="div" paragraph fontWeight="bold" sx={{ letterSpacing: '0.0em' }}>
                            Maximillian Chalitsios
                        </Typography>
                        <Typography variant="h5" component="div" paragraph sx={{ letterSpacing: '0.05em' }}>
                            I'm a versatile <span style={{ color: theme.palette.secondary.dark }}>{text}</span>_
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <IconButton sx={{ padding: 0, marginRight: '20px' }}>
                                <Link to="https://www.linkedin.com/in/maximillianchalitsios/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon sx={{ fontSize: 52 }} color="primary" />
                                </Link>
                            </IconButton>
                            <IconButton sx={{ padding: 0, marginRight: '20px' }}>
                                <Link to="https://github.com/fygure" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon sx={{ fontSize: 46 }} color="primary" />
                                </Link>
                            </IconButton>
                            <IconButton sx={{ padding: 0, marginRight: '20px' }}>
                                <Link to="https://drive.google.com/file/d/1Bn-XDe-BvhkMut2lAkTz-qWxq6ekoTgW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <DescriptionIcon sx={{ fontSize: 47 }} color="primary" />
                                </Link>
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Side */}
                <Grid item xs={6}>
                    <Paper elevation={3} sx={{
                        padding: '32px',
                        margin: '64px 64px 64px 16px',
                        backgroundColor: theme.palette.background.paper,
                        height: '500px',
                    }}>
                        <Typography variant="h5" component="div">
                            Caterpillar Here
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
