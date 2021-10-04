import React from 'react';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
const Home = () => {
    // uses useState & useEffect hooks
    const [courses, setCourses] = useState([])

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
                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    />)
                }
            </Row>

        </div>
    );
};

export default Home;