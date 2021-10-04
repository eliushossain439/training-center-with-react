import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    console.log(props);
    const { name, img, tittle, price } = props.course
    return (
        <div>
            <Col className="container">
                <Card>
                    <Card.Img className="img-fluid" variant="top" src={img} />
                    <Card.Body>
                        <h5>Course-Name: {name}</h5>
                        <Card.Title>{tittle}</Card.Title>
                        <h5>price: {price} tk</h5>
                        <button className="btn btn-secondary">purchase</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;