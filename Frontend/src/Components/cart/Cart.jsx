import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const dispatch = useDispatch();

  const deleteCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <div>
        <h1 className="text-3xl font-bold">Cart</h1>
        <button className="clear-cart-btn cursor-pointer" onClick={deleteCart}>
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <OrderSummary />
    </div>
  );
};

export default Cart;
