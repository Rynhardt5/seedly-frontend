import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getItemsFromCart } from "../../redux/actions/seedActions";

import LoadingSpinner from "../../components/UI-components/LoadingSpinner";

const Cart = () => {
  const cart = useSelector((state) => state.seed.cart);
  const cartItems = useSelector((state) => state.seed.cartItems);
  const cartLoaded = useSelector((state) => state.seed.cartLoaded);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (cart) {
      dispatch(getItemsFromCart(cart));
    }
  }, [cart, dispatch]);

  if (cartLoaded && !cart) {
    return <Redirect to="/seeds" />;
  }

  if (!cartItems) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
      </tr>
      {cartItems &&
        cartItems.seeds.map((seed) => (
          <tr key={seed.id}>
            <td>{seed.name}</td>
            <td>{seed.price}</td>
            <td>{cart[seed.id]}</td>
            <td>{cart[seed.id] * seed.price}</td>
          </tr>
        ))}
    </table>
  );
};

export default Cart;
