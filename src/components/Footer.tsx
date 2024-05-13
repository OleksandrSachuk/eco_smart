import React from 'react';
import phone from '../assets/images/phone.svg';
import letter from '../assets/images/letter.svg';
import map from '../assets/images/map.svg';
import {Box, Link, Grid, Typography} from '@mui/material';

export const Footer = () => {
    return (
        <footer>
            <Grid
                container
                spacing={3}
                direction="row"
                sx={{
                    backgroundColor: '#000',
                    color: '#ffffff',
                    padding: '30px 0'
                }}
            >
                <Grid item xs={4}>
                    <Grid
                        container
                        direction="column"
                    >
                        <Link
                            href="#"
                            color="#ffffff"
                            sx={{
                                textDecoration: 'none',
                                margin: '10px 0',
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            color="#ffffff"
                            sx={{
                                textDecoration: 'none',
                                margin: '10px 0',
                            }}
                        >
                            About us
                        </Link>
                        <Link
                            href="#"
                            color="#ffffff"
                            sx={{
                                textDecoration: 'none',
                                margin: '10px 0',
                            }}
                        >
                            Services
                        </Link>
                        <Link
                            href="#"
                            color="#ffffff"
                            sx={{
                                textDecoration: 'none',
                                margin: '10px 0',
                            }}
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="#"
                            color="#ffffff"
                            sx={{
                                textDecoration: 'none',
                                margin: '10px 0',
                            }}
                        >
                            Contact us
                        </Link>
                        <Link
                            href="#"
                            color="#ffffff"
                            sx={{
                                textDecoration: 'none',
                                margin: '10px 0',
                            }}
                        >
                            Privacy policy
                        </Link>
                        <Link
                            href="#"
                            color="#ffffff"
                            sx={{
                                textDecoration: 'none',
                                margin: '10px 0',
                            }}
                        >
                            Terms and Conditions
                        </Link>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    alignItems='flex-end'
                    display="flex"
                >
                    <Typography
                        variant="body1"
                        align="center"
                    >
                        Copyright Statement: © 2023
                        <br/>
                        EcoSmart Solutions. All rights reserved.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                    alignItems='flex-end'
                    display="flex"
                >
                    <Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="left"
                            sx={{
                                marginBottom: '10px'
                            }}
                        >
                            <img
                                src={phone}
                                alt="phone"
                            />
                            <Link
                                href="tel:123-456-7890"
                                color="#ffffff"
                                sx={{
                                    textDecoration: 'none',
                                    marginLeft: '10px'
                                }}
                            >
                                123-456-7890
                            </Link>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="left"
                            sx={{
                                marginBottom: '10px'
                            }}
                        >
                            <img src={letter} alt="letter"/>
                            <Link
                                href="mailto:123-456-7890"
                                color="#ffffff"
                                sx={{
                                    textDecoration: 'none',
                                    marginLeft: '10px'
                                }}
                            >
                                info@ecosmart.com
                            </Link>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="left"
                        >
                            <img src={map} alt="map"/>
                            <Link
                                href="https://www.google.com"
                                color="#ffffff"
                                sx={{
                                    textDecoration: 'none',
                                    marginLeft: '10px'
                                }}
                            >
                                123 Green Street, EcoCity, Earth
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </footer>
    )
}

