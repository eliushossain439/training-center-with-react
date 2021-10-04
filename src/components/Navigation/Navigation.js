import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <h1 className="text-warning my-5">TECHNICAL TRAINING CENTER</h1>
            <Container className="navTag">
                <Link className="link" to="/home">HOME</Link>
                <Link className="link" to="/about">ABOUT-US</Link>
                <Link className="link" to="/services">SERVICES</Link>
                <Link className="link" to="/courses">COURSES</Link>
            </Container>
        </div>
    );
};

export default Navigation;