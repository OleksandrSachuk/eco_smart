import React from 'react';
import {Box, Button, Card, CardContent, Typography} from '@mui/material';
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
            <Box>
                Embrace a Sustainable Future with EcoSmart Solutions
            </Box>
            <Box>
                Harness the Power of Renewable Energy for Your Home or Business
            </Box>
            <Box>
                <Button variant="contained">Get a free consultation</Button>
            </Box>
            <Box>
                <img src={main} alt="main"/>
            </Box>
            <Box>
                Why Choose EcoSmart Solutions
            </Box>
            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <img src={card1} alt="card1"/>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Sustainable Energy Solutions
                        </Typography>
                        <Typography variant="body2">
                            We provide cutting-edge solar and wind energy systems that reduce your carbon footprint
                            and decrease dependency on traditional power sources.
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <img src={card2} alt="card2"/>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Cost-Effective Solutions
                        </Typography>
                        <Typography variant="body2">
                            Our energy solutions help you save money by significantly reducing electricity bills and
                            providing access to various government incentives and rebates.
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <img src={card3} alt="card3"/>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Expertise You Can Trust
                        </Typography>
                        <Typography variant="body2">
                            With over a decade of experience, our team of skilled professionals delivers tailored
                            energy solutions backed by industry certifications and successful installations.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box>
                <img src={video} alt="video"/>
            </Box>
            <Box>
                Our Customers Love Us
            </Box>
            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <img src={customer1} alt="customer1"/>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Sustainable Energy Solutions
                        </Typography>
                        <Typography variant="body2">
                            We provide cutting-edge solar and wind energy systems that reduce your carbon footprint
                            and decrease dependency on traditional power sources.
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <img src={customer2} alt="customer2"/>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Thanks to EcoSmart Solutions, our home is now powered by the sun! We're saving money and
                            making a positive impact on the environment.
                        </Typography>
                        <Typography variant="body2">
                            -Jhon & Sara
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined">
                    <CardContent>
                        <img src={customer3} alt="customer3"/>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            I chose EcoSmart Solutions because they share my passion for a greener planet. They
                            guided me through the entire process, and now I'm generating clean energy at home!
                        </Typography>
                        <Typography variant="body2">
                            -Mark
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box>
                Start Your Journey to a Greener Future Today
            </Box>
            <Box>
                <Button variant="contained">Get a free consultation</Button>
            </Box>
        </main>
    )
}

