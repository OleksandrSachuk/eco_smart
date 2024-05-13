import React from 'react';
import {Box, Grid, Button, Card, CardContent, Typography} from '@mui/material';
import main from "../assets/images/main.png";
import card1 from "../assets/images/card1.svg";
import card2 from "../assets/images/card2.svg";
import card3 from "../assets/images/card3.svg";
import video from "../assets/images/video.png";
import customer1 from "../assets/images/customer1.png";
import customer2 from "../assets/images/customer2.png";
import customer3 from "../assets/images/customer3.png";

export const Main = () => {
    return (
        <main>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                >
                    <Typography
                        variant="h2"
                        align="center"
                        color="#0C0D34"
                        sx={{
                            marginBottom: '30px',
                        }}
                    >
                        Embrace a Sustainable Future
                        <br/>
                        with EcoSmart Solutions
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        color="#63638A"
                        sx={{
                            marginBottom: '30px',
                        }}
                    >
                        Harness the Power of Renewable Energy for Your Home or Business
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                    >
                        <Button variant="contained"
                                sx={{
                                    color: '#fff',
                                    backgroundColor: '#2E32D1',
                                    textTransform: 'none',
                                    marginBottom: '50px',
                                    cursor: 'pointer',
                                }}

                        >
                            Get a free consultation
                        </Button>
                    </Box>
                    <Box>
                        <img src={main} alt="main"/>
                    </Box>
                    <Typography
                        variant="h3"
                        align="center"
                        color="#0C0D34"
                        sx={{
                            margin: '30px 0',
                        }}
                    >
                        Why Choose EcoSmart Solutions
                    </Typography>
                </Grid>

                <Grid
                    container
                    spacing={3}
                    direction="row"
                >
                    <Grid item xs={6}>
                        <Box>
                            <Card elevation={0}>
                                <CardContent>
                                    <img src={card1} alt="card1"/>
                                    <Typography variant="h4"
                                                sx={{
                                                    color: "#0C0D34",
                                                    margin: '25px 0',
                                                }}>
                                        Sustainable Energy Solutions
                                    </Typography>
                                    <Typography variant="h6"
                                                sx={{
                                                    color: "#63638A",
                                                }}>
                                        We provide cutting-edge solar and wind energy systems that reduce your carbon
                                        footprint
                                        and decrease dependency on traditional power sources.
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card elevation={0}>
                                <CardContent>
                                    <img src={card2} alt="card2"/>
                                    <Typography variant="h4"
                                                sx={{
                                                    color: "#0C0D34",
                                                    margin: '25px 0',
                                                }}>
                                        Cost-Effective Solutions
                                    </Typography>
                                    <Typography variant="h6"
                                                sx={{
                                                    color: "#63638A",
                                                }}>
                                        Our energy solutions help you save money by significantly reducing electricity
                                        bills and
                                        providing access to various government incentives and rebates.
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card elevation={0}>
                                <CardContent>
                                    <img src={card3} alt="card3"/>
                                    <Typography variant="h4"
                                                sx={{
                                                    color: "#0C0D34",
                                                    margin: '25px 0',
                                                }}>
                                        Expertise You Can Trust
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                                sx={{
                                                    color: "#63638A",
                                                }}>
                                        With over a decade of experience, our team of skilled professionals delivers
                                        tailored
                                        energy solutions backed by industry certifications and successful installations.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            cursor: 'pointer',
                        }}>
                            <img src={video} alt="video"/>
                        </Box>
                    </Grid>
                </Grid>

                    <Typography
                        variant="h3"
                        align="center"
                        color="#0C0D34"
                        sx={{
                            margin: '50px 0',
                        }}
                    >
                    Our Customers Love Us
                    </Typography>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                >
                    <Grid item xs={4}>
                        <Card elevation={0}>
                            <CardContent>
                                <img
                                    src={customer1}
                                    alt="customer1"
                                />
                                <Typography
                                    variant="body1"
                                    align="center"
                                    sx={{
                                        color: "#494949",
                                        margin: '10px 0',
                                    }}
                                >
                                    Thanks to EcoSmart Solutions, our home is now powered by the sun! We're saving money and making a positive impact on the environment.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center"
                                    sx={{
                                        color: "#000000",
                                    }}
                                >
                                    -Jhon & Sara
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0}>
                            <CardContent>
                                <img src={customer2} alt="customer2"/>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    sx={{
                                        color: "#494949",
                                        margin: '10px 0',
                                    }}
                                >
                                    EcoSmart Solutions provided us with a comprehensive energy plan that not only reduced our overhead costs but also improved our sustainability efforts.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center"
                                    sx={{
                                        color: "#000000",
                                    }}
                                >
                                    -Lisa
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card elevation={0}>
                            <CardContent>
                                <img src={customer3} alt="customer3"/>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    sx={{
                                        color: "#494949",
                                        margin: '10px 0',
                                    }}
                                >
                                    I chose EcoSmart Solutions because they share my passion for a greener planet. They
                                    guided me through the entire process, and now I'm generating clean energy at home!
                                </Typography>
                                <Typography
                                    variant="body2"
                                    align="center"
                                    sx={{
                                        color: "#000000",
                                    }}
                                >
                                    -Mark
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Typography
                    variant="h3"
                    align="center"
                    color="#0C0D34"
                    sx={{
                        margin: '50px 0',
                    }}
                >
                    Start Your Journey to
                    <br/>
                    a Greener Future Today
                </Typography>
                <Box>
                    <Button variant="contained"
                            sx={{
                                color: '#fff',
                                backgroundColor: '#2E32D1',
                                textTransform: 'none',
                                marginBottom: '50px',
                                cursor: 'pointer',
                            }}

                    >
                        Get a free consultation
                    </Button>
                </Box>
            </Grid>
        </main>
    )
}

