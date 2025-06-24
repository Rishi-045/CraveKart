import React from "react";
import { RES_MENU_IMG_URL } from "../../utils/constant";
import GreenVegIcon from "../../assets/GreenVegIcon.png";
import NonVegIcon from "../../assets/NonVegIcon.png";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (data) => {
    console.log(data);
    dispatch(removeItem(data));
  };

  let { imageId, name, price, ratings, isVeg, id } = props?.item || {};

  let { rating, ratingCountV2 } = ratings?.aggregatedRating || {};

  return (
    <div className="flex justify-center mt-10 ">
      <div className="w-full max-w-4xl space-y-6">
        <div className="flex justify-between items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-2 w-3/4">
            <div className="flex flex-col items-start ">
              <img
                className="h-5"
                src={isVeg === 1 ? GreenVegIcon : NonVegIcon}
                alt=""
              />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-green-600 font-medium">₹{price / 100}</p>
            </div>
            <div className="text-sm text-gray-600 text-start">
              <span className="text-yellow-500 font-semibold">
                ★ {rating ?? 4.3}
              </span>
              <span> ({ratingCountV2 ?? 1123})</span>
              <button
                className="cursor-pointer "
                onClick={() => handleDeleteItem({ id, price })}
              >
                {" "}
                <FaTrashAlt className="text-sm relative top-0.5 left-2 text-red-400" />
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-28 h-24 overflow-hidden rounded-lg shrink-0">
            <img
              src={RES_MENU_IMG_URL + imageId}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
