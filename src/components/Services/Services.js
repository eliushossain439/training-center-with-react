import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setCourses] = useState([])

    // use effect
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Row xs={1} md={2} className="g-4 mt-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </Row>
        </div>
    );
};

export default Services;