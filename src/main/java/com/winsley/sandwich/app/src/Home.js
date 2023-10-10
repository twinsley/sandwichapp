import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import MenuPage from "./menuPage";
import Checkout from "./Checkout";

const Home = () => {
    return (
        <div >
            <AppNavbar/>
            <Container fluid className="row" style={{height: "89vh"}}>
                <div className="col-9"><MenuPage /></div>
                <div className="col-3"><Checkout /></div>

            </Container>
        </div>
    );
}

export default Home;