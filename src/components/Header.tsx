import React from 'react';
import {Grid, Link} from '@mui/material';

export const Header = () => {
    return (
        <header>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    typography: 'body-1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                    margin: '50px 0',
                }}
            >
                <Link
                    href="#"
                    color="#63638A"
                    sx={{
                        textDecoration: 'none'
                    }}
                >
                    Home
                </Link>
                <Link
                    href="#"
                    color="#63638A"
                    sx={{
                        textDecoration: 'none'
                    }}
                >
                    About us
                </Link>
                <Link
                    href="#"
                    color="#63638A"
                    sx={{
                        textDecoration: 'none'
                    }}
                >
                    Services
                </Link>
                <Link
                    href="#"
                    color="#63638A"
                    sx={{
                        textDecoration: 'none'
                    }}
                >
                    Testimonials
                </Link>
                <Link
                    href="#"
                    color="#63638A"
                    sx={{
                        textDecoration: 'none'
                    }}
                >
                    Contact us
                </Link>
            </Grid>
        </header>
    )
}

