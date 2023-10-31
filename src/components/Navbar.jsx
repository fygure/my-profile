import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Navbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: theme => theme.palette.primary.main }}>
            <Toolbar>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-end">
                    <Button component={Link} to="/" variant="contained" color="secondary" sx={buttonStyles}>
                        Home
                    </Button>
                    <Button component={Link} to="/bio" variant="contained" color="secondary" sx={buttonStyles}>
                        Bio
                    </Button>
                    <Button component={Link} to="/experience" variant="contained" color="secondary" sx={buttonStyles}>
                        Experience
                    </Button>
                    <Button component={Link} to="/skills" variant="contained" color="secondary" sx={buttonStyles}>
                        Skills
                    </Button>
                    <Button component={Link} to="/projects" variant="contained" color="secondary" sx={buttonStyles}>
                        Projects
                    </Button>
                    <Button component={Link} to="/contact" variant="contained" color="secondary" sx={buttonStyles}>
                        Contact Me
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

const buttonStyles = {
    boxShadow: '-5px -5px 0 rgba(0, 0, 0, 0.2)', // Add shadow to the top-left
};
