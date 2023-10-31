import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

export default function Hero() {
    const theme = useTheme();
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
                }}>
                    <Typography variant="h5" component="div">
                        Left Side
                    </Typography>
                </Paper>
            </Grid>

            {/* Right Side */}
            <Grid item xs={6}>
                <Paper elevation={3} sx={{
                    padding: '32px',
                    margin: '64px',
                    backgroundColor: theme.palette.background.paper,
                }}>
                    <Typography variant="h5" component="div">
                        Right Side
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
