import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import mountainIcon from '../images/mountain-icon-64.png';
import darkmodeIcon from '../images/dark-mode-64.png';

export default function Navbar({ toggleTheme }) {
    const buttonStyles = {
        boxShadow: '-5px -5px 0 rgba(0, 0, 0, 0.2)', // Add shadow to the top-left
        selected: {
            boxShadow: '-5px 5px 0 rgba(0, 0, 0, 0.2)',
        },
    };

    const [selectedButton, setSelectedButton] = useState('Home');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: theme => theme.palette.primary.light, boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton component={Link} to="/coming-soon" onClick={() => handleButtonClick('Mountain')}>
                        <img src={mountainIcon} alt="Mountain Icon" width="64" height="64" />
                    </IconButton>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: '100%' }}
                    >
                        <Button
                            component={Link}
                            to="/"
                            variant="contained"
                            color="secondary"
                            sx={selectedButton === 'Home' ? { ...buttonStyles.selected, backgroundColor: 'yellow' } : buttonStyles}
                            onClick={() => handleButtonClick('Home')}
                        >
                            Home
                        </Button>
                        {/* <Button
                            component={Link}
                            to="/bio"
                            variant="contained"
                            color="secondary"
                            sx={selectedButton === 'Bio' ? { ...buttonStyles.selected, backgroundColor: 'yellow' } : buttonStyles}
                            onClick={() => handleButtonClick('Bio')}
                        >
                            Bio
                        </Button> */}
                        <Button
                            component={Link}
                            to="/experience"
                            variant="contained"
                            color="secondary"
                            sx={selectedButton === 'Experience' ? { ...buttonStyles.selected, backgroundColor: 'yellow' } : buttonStyles}
                            onClick={() => handleButtonClick('Experience')}
                        >
                            Experience
                        </Button>
                        <Button
                            component={Link}
                            to="/skills"
                            variant="contained"
                            color="secondary"
                            sx={selectedButton === 'Skills' ? { ...buttonStyles.selected, backgroundColor: 'yellow' } : buttonStyles}
                            onClick={() => handleButtonClick('Skills')}
                        >
                            Skills
                        </Button>
                        <Button
                            component={Link}
                            to="/projects"
                            variant="contained"
                            color="secondary"
                            sx={selectedButton === 'Projects' ? { ...buttonStyles.selected, backgroundColor: 'yellow' } : buttonStyles}
                            onClick={() => handleButtonClick('Projects')}
                        >
                            Projects
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            color="secondary"
                            sx={selectedButton === 'Contact Me' ? { ...buttonStyles.selected, backgroundColor: 'yellow' } : buttonStyles}
                            onClick={() => handleButtonClick('Contact Me')}
                        >
                            Contact Me
                        </Button>
                    </Stack>
                    <IconButton onClick={toggleTheme}>
                        <img src={darkmodeIcon} alt="DarkMode Icon" width="64" height="64" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}

