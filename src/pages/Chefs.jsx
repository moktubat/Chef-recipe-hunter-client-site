import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ChefData from './ChefData';

const Chefs = () => {

    const [chefsData, setChefsData] = useState([]);

    fetch("http://localhost:5000/chefs")
    .then((res) => res.json())
    .then((data) => setChefsData(data))
    console.log(chefsData);

    return (
        <div>
            <div className='container text-center my-5 bg-danger-subtle'>
            <h2 className="fw-bold text-black d-inline  px-4 border-bottom border-5 border-danger">Our Chefs</h2>

            <Row xs={1} md={3} className="pt-5">
      {
        chefsData.map(chef => <ChefData
        key={chef.id}
        chef={chef}
        >

        </ChefData>
            )
      }
    </Row>
            </div>
        </div>
    );
};

export default Chefs;