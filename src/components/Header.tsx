import React from 'react';
import {Box, Link} from '@mui/material';

export const Header = () => {
    return (
        <header className="App-header">
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
            </Box>
        </header>
    )
}

