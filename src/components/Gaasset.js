import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Gaasset({ gaasset }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/gaasset/${gaasset.id}`}>
        <Card.Img src={gaasset.thumbnail_img} />
        <Card.Body>            
                <Card.Title as="div">
                    <strong>{gaasset.name}</strong>
                </Card.Title>
                <Card.Text as="div">
                    <div className='my-3'>
                        <Rating value={gaasset.rating} text={`${gaasset.numReviews} reviews`} color="{#eaa000}"/> 
                    </div>

                </Card.Text>
                <Card.Text as="h3">
                    {gaasset.price}
                </Card.Text>            
        </Card.Body>
      </Link>
    </Card>
  );
}

export default Gaasset
