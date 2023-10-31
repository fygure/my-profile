import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: theme => theme.palette.primary.main }}>
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Home
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/bio" style={{ textDecoration: 'none', color: 'white' }}>
                        Bio
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/experience" style={{ textDecoration: 'none', color: 'white' }}>
                        Experience
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/skills" style={{ textDecoration: 'none', color: 'white' }}>
                        Skills
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
                        Projects
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                        Contact Me
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
