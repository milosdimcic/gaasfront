import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Gaasset from "../components/Gaasset";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listGaassets } from "../actions/gaassetActions";
import axios from "axios";

function GaassetsScreen() {
  const dispatch = useDispatch();
  const gaassetList = useSelector((state) => state.gaassetList);
  const {} = gaassetList;
  const { error, loading, gaassets } = gaassetList;
  useEffect(() => {
    dispatch(listGaassets());
  }, [dispatch]);

  return (
    <div>
      <h1>Gaassets</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {gaassets.map((gaasset) => (
            <Col key={gaasset._id} sm={12} md={6} lg={3} xl={3}>
              <Gaasset gaasset={gaasset} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default GaassetsScreen;
