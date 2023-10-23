import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen(location) {
  const { id } = useParams();
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("cartItems: ", cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, [dispatch, id]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

   const checkoutHandler = (id) => {   

    navigate('/login?redirect=shipping')
   };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="Flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/gaasset/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="dark"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.length}) items</h2>$
              {cartItems
                .reduce((acc, item) => acc + parseFloat(item.price), 0)
                .toFixed(2)}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={checkoutHandler}
            >
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;

/*MY NOTES
in const { id } = useParams(); this has to stay "id"
You cannot change the name, because that is how it is sent 
check App.Js:
<Route path="/cart/:id?" element={<CartScreen />} />

useEffect calls (dispatches) the addToCart function which will add the product to the local storage 
(I think the the reducer adds them to the state.."State gets updated based on what is in local storage", says Dennis)
It seems that we set the localStorage in actions and give it the key "cartItems"
and then use that key in the reducer to set the state from it

useSelector is used to actually pull the Data from the state


*/
