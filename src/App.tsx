import React from 'react';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Container} from '@mui/material';

function App() {
    return (
        <Container>
            <Header/>
            <Main/>
            <Footer/>
        </Container>
    );
}

export default App;
