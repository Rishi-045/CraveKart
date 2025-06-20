import GreenVegIcon from "../../assets/GreenVegIcon.png";
import NonVegIcon from "../../assets/NonVegIcon.png";
import { RES_MENU_IMG_URL } from "../../utils/constant";
import "./RestaurantMenu.css"

const RestaurantMenuCards = (props) => {
  let { imageId, name, price, description, ratings,isVeg } =
    props?.resMenu?.card?.info || {};

  let { rating, ratingCountV2 } = ratings?.aggregatedRating || {};

  return (
    <div className="res-menu-cards">
      <div className="left-conatiner">
        <div className="upper-left-container">
          <img src={(isVeg==1)?GreenVegIcon:NonVegIcon} alt="" />
          <div>{name}</div>
          <div>₹{price / 100}</div>
        </div>
        <div className="middle-left-container">
          <span className="rating">★ {rating ? rating : 4.3} </span>(
          {ratingCountV2 ? ratingCountV2 : 1123})
        </div>
        <div className="lower-left-container">{description}</div>
      </div>
      <div className="right-container flex flex-col gap-2">
        <img src={RES_MENU_IMG_URL + imageId} alt={name} />
        <div>
          <button>add</button>
          <p>customisable</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCards;
