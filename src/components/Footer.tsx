import React from 'react';
import phone from '../assets/images/phone.svg';
import letter from '../assets/images/letter.svg';
import map from '../assets/images/map.svg';
import {Box, Link} from '@mui/material';

export const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
            >
                <Link href="#" color="#63638A">
                    Home
                </Link>
                <Link href="#" color="#63638A">
                    About us
                </Link>
                <Link href="#" color="#63638A">
                    Services
                </Link>
                <Link href="#" color="#63638A">
                    Testimonials
                </Link>
                <Link href="#" color="#63638A">
                    Contact us
                </Link>
                <Link href="#" color="#63638A">
                    Privacy policy
                </Link>
                <Link href="#" color="#63638A">
                    Terms and Conditions
                </Link>
            </Box>
            <Box>
                Copyright Statement: © 2023 EcoSmart Solutions. All rights reserved.
            </Box>
            <Box>
                <div>
                    <img src={phone} alt="phone"/>
                    <span>
                    123-456-7890
                    </span>
                </div>
                <div>
                    <img src={letter} alt="letter"/>
                    <span>nfo@ecosmart.com</span>
                </div>
                <div>
                    <img src={map} alt="map"/>
                    <span>123 Green Street, EcoCity, Earth</span>
                </div>
            </Box>
        </footer>
    )
}

