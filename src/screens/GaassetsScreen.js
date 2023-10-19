import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Gaasset from '../components/Gaasset'
import axios from "axios";

function GaassetsScreen() {
  const [gaassets, setGaassets] = useState([])

  useEffect(() => {


    async function fetchGaassets(){
      const {data} =  await axios.get("/api/gaassets/")
      setGaassets(data)
    }

    fetchGaassets()

    
  }, [])

  return (
    <div>
      <h1>Gaassets</h1>
      <Row>
        {gaassets.map(gaasset => (
          <Col key={gaasset._id} sm={12} md={6} lg={3} xl={3}>
            <Gaasset gaasset={gaasset} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GaassetsScreen;
