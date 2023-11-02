import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const transitionDuration = 2200;

const Slideshow = () => {
    const theme = useTheme();
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState('fade-in');

    useEffect(() => {
        const image1 = require('../images/me1.jpg');
        const image2 = require('../images/me2.jpg');
        const image4 = require('../images/me4.jpg');

        const imageArray = [image1, image2, image4];
        setImages(imageArray);

        const interval = setInterval(() => {
            setFade('fade-out');

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
                setFade('fade-in');
            }, transitionDuration);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: `opacity 1s`,
                '&.fade-in': {
                    opacity: 1,
                },
                '&.fade-out': {
                    opacity: 0,
                },
            }}
            className={fade}
        >
            <img
                src={images[currentIndex]}
                alt={`Me ${currentIndex + 1}`}
                style={{
                    maxWidth: '96%',
                    maxHeight: '100%',
                    height: 'auto',
                    width: 'auto',
                    border: `0px 0px 0px 0px ${theme.palette.secondary.dark}`,
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                }}
            />

        </Box>
    );
};

export default Slideshow;
