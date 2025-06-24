import { useSelector } from "react-redux";
import "./Cart.css";

const OrderSummary = () => {
  const { totalAmount, items } = useSelector((store) => store.cart);

  console.log(items.length, totalAmount);

  return (
    <>
      {items.length == 0 ? (
        <h1 className="empty-cart text-xl">
          🛒 Your cart is empty. Add something tasty!
        </h1>
      ) : (
        <div className="order-container">
          <h2 className="font-bold">Order Summary</h2>
          <hr />

          <div className="">
            <div className="mid-container">
              <span>Subtotal</span>
              <span>{totalAmount}</span>
            </div>
            <div className="mid-container">
              <span>Shipping</span>
              <span>TBD</span>
            </div>
            <div className="mid-container">
              <span>Estimated Tax</span>
              <span>0.00</span>
            </div>
            <hr />
            <div className="mid-container">
              <span className="font-bold">Total</span>
              <span className="font-bold">{totalAmount}</span>
            </div>
          </div>

          <button className="w-full bg-[#ff4b2b] text-white py-3 font-semibold rounded hover:bg-[#e03e1f] transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
