import { Container, Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Skills() {

    const theme = useTheme();

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{
                display: 'flex',
                padding: '32px',
                margin: '32px',
                backgroundColor: theme.palette.background.paper,
                height: '250px',
            }}>
                {/* Content of your "Skills" component goes here */}
                <Typography variant="h6" component="div" paragraph sx={{ letterSpacing: '0.05em' }}>
                    Skills
                </Typography>
                <Typography variant="body2" sx={{ letterSpacing: '0.05em', color: theme.palette.secondary.dark }}>
                    List your skills here
                </Typography>
            </Paper>
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '68vh' }}>Skills</Box> */}

        </Container>
    )
}
