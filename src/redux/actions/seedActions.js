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
import { setMessage } from "./modalActions";
import axios from "axios";

export const searchQuery = (query) => async (dispatch) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_API}/seeds/filter`,
    {
      query,
    }
  );

  const reply = response.data.seeds.length === 0 ? null : response.data.seeds;

  dispatch({
    type: SEND_SEARCH_QUERY,
    payload: reply,
  });
};

export const clearFilteredItems = () => (dispatch) => {
  dispatch({
    type: CLEAR_FILTERED_ITEMS,
  });
};

export const clearSeedItem = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEED_ITEM,
  });
};

export const addSeedToCart = (seedId) => async (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: seedId,
  });
};

export const getItemsFromCart = (cart) => async (dispatch) => {
  try {
    console.log("cart", cart);
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/seeds/cart`,
      cart
    );
    console.log("response", response);
    dispatch({
      type: GET_ITEMS_FROM_CART,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch(setMessage(error.response.data));
  }
};

export const loadCart = (cart) => async (dispatch) => {
  dispatch({
    type: LOAD_CART,
    payload: cart,
  });
};

export const removeSeedFromCart = (seedId) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: seedId,
  });
};

export const createSeed = (data, imgFile) => async (dispatch) => {
  try {
    const formData = new FormData();

    formData.append("photo", imgFile);

    const {
      data: { path },
    } = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/images`,
      formData
    );

    const imageUrl = `${process.env.REACT_APP_SERVER_API}/${path}`;

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_API}/seeds`,
      {
        ...data,
        imageUrl,
      }
    );

    dispatch({
      type: CREATE_SEED,
      payload: { seed: response.data.seed },
    });
  } catch (error) {
    dispatch(setMessage(error.response.data));
  }
};

export const getSeeds = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_API}/seeds`
    );

    dispatch({
      type: GET_SEEDS,
      payload: { seeds: response.data.seeds },
    });
  } catch (error) {
    dispatch(setMessage(error.response.data));
  }
};
