import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'
import { CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (productId) => async (dispatch, getState) =>{
    const { data } = await axios.get(`/api/gaassets/${productId}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data.id,
        name: data.name,
        image: data.thumbnail_img,
        price: data.price,
      },
    });

    //Put the data inside the local storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  //Put the data inside the local storage after the action is exectued
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};