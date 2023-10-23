import { CART_ADD_ITEM } from '../constants/cartConstants'
import { CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state={cartItems: []}, action) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload;
        const existItem = state.cartItems.find(
          (x) => x.product === item.product
        );

        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }

        //Action.payload will carry the id, that is what we will send with the action
      case CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(x => x.product !== action.payload)
            }

      default:
        return state;
    }
}

/*MY NOTES
x.product works the sam as x.gaasset - the change there is irrelevant
*/