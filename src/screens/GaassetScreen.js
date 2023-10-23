import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Navbar,
  Container,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import gaassets from "../gaassets";
import { listGaassetDetails } from "../actions/gaassetActions";
import ProfileImage from "../components/ProfileImage";

function GaassetScreen(history) {
  const dispatch = useDispatch();
  // const [gaasset, setGaasset] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();
  const gaassetDetails = useSelector((state) => state.gaassetDetails);
  const { loading, error, gaasset } = gaassetDetails;

  useEffect(() => {
    dispatch(listGaassetDetails(id));
  }, [dispatch]);

  const addToCartHandler = () =>{
    navigate(`/cart/${id}`)
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <React.Fragment>
          <Row>
            <Col
              md={4}
              style={{ height: "100px" }}
              className="d-flex justify-content-center align-items-center"
            >
              Cell 1
            </Col>
            <Col
              md={4}
              style={{ height: "100px" }}
              className="d-flex justify-content-center align-items-center"
            >
              <h3>{gaasset.name}</h3>
            </Col>
            <Col
              md={4}
              style={{ height: "100px" }}
              className="d-flex justify-content-center align-items-center"
            >
              <ProfileImage profile={gaasset.owner} />
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center text-center gaasset-description"
            >
              <p>{gaasset.description}</p>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src={gaasset.thumbnail_img}
                alt={gaasset.name}
                fluid
                rounded
              ></Image>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              Cell 6
            </Col>
            <Col
              md={4}
              style={{ height: "100px" }}
              className="d-flex justify-content-center align-items-center"
            >
              Cell 7
            </Col>
            <Col
              md={4}
              style={{ height: "100px" }}
              className="d-flex justify-content-center align-items-center"
            >
              Cell 8
            </Col>
            <Col
              md={4}
              style={{ height: "100px" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Button
                onClick={addToCartHandler}
                className="btn-block"
                type="button"
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
          {/* <Row>
            <Col md={6} className="align-items-center">
              <Image src={gaasset.thumbnail_img} alt={gaasset.name}></Image>
            </Col>
            <Col
              md={3}
              className="d-flex align-items-center justify-content-left"
            >
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <p>{gaasset.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row> */}
        </React.Fragment>
      )}
    </div>
  );
}

export default GaassetScreen;

/*MY NOTES

useSelector is used to actually pull the Data from the state


*/