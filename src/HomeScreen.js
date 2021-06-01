import React from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import "./HomeScreen.css";
import requests from './Requests';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            
            <Banner />

            <Row title="Séries Netflix" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="A l'affiche" fetchUrl={requests.fetchTrending} />
            <Row title="Meilleurs notes" fetchUrl={requests.fetchTopRated} />
            <Row title="Action" fetchUrl={requests.fetchActionMovie} />
            <Row title="Romantique" fetchUrl={requests.fetchRomanceMovie} />
            <Row title="Comique" fetchUrl={requests.fetchComedyMovie} />
            <Row title="Animation" fetchUrl={requests.fetchAnimation} />


        </div>
    )
}

export default HomeScreen
