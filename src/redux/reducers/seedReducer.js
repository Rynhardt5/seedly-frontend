import {
  CREATE_SEED,
  GET_SEEDS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOAD_CART,
  GET_ITEMS_FROM_CART,
  CLEAR_SEED_ITEM,
  SEND_SEARCH_QUERY,
  CLEAR_FILTERED_ITEMS,
} from "../actionTypes";

const initialState = {
  item: null,
  collection: null,
  filteredCollection: null,
  cart: null,
  cartLoaded: false,
  cartItems: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cart = {
        ...state.cart,
        [action.payload]:
          !state.cart || !state.cart[action.payload]
            ? 1
            : state.cart[action.payload] + 1,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
      };
    case SEND_SEARCH_QUERY:
      return { ...state, filteredCollection: action.payload };
    case CLEAR_FILTERED_ITEMS:
      return { ...state, filteredCollection: null };
    case LOAD_CART:
      return { ...state, cart: action.payload, cartLoaded: true };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
        },
      };
    case GET_ITEMS_FROM_CART:
      return { ...state, cartItems: action.payload };
    case CREATE_SEED:
      return { ...state, item: action.payload.seed };
    case GET_SEEDS:
      return { ...state, collection: action.payload.seeds };
    case CLEAR_SEED_ITEM:
      return { ...state, item: null };
    default:
      return state;
  }
};

export default productReducer;
