import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import gaassets from '../gaassets'
import { useParams } from 'react-router-dom'
import axios from "axios";

function GaassetScreen() {
 
    const [gaasset, setGaasset] = useState([]);
    const { id } = useParams();    

    useEffect(() => {
      async function fetchGaasset() {
        const { data } = await axios.get(`/api/gaassets/${id}`);
        setGaasset(data);
      }

      fetchGaasset();
    }, [id]);


    // const {id} = useParams();
    // const gaasset = gaassets.find((p) => p._id == id);

  return (
    <div>
      <Row>
        <Col md={6}>Image goes here</Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>{gaasset.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>{gaasset.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default GaassetScreen
