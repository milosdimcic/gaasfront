import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import gaassets from "../gaassets";
import { useParams } from "react-router-dom";
import { listGaassetDetails } from "../actions/gaassetActions";

function GaassetScreen() {
  const dispatch = useDispatch();
  // const [gaasset, setGaasset] = useState([]);
  const { id } = useParams();
  const gaassetDetails = useSelector(state => state.gaassetDetails);
  const {loading, error, gaasset} = gaassetDetails

  useEffect(() => {
    dispatch(listGaassetDetails(id));
  }, [dispatch]);
 
  // const {id} = useParams();
  // const gaasset = gaassets.find((p) => p._id == id);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
      )}
    </div>
  );
}

export default GaassetScreen;
