import { IMG_URL } from "../../utils/constant";
import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  let {
    name,
    areaName,
    cuisines,
    costForTwo,
    avgRating,
    sla: { slaString },
    cloudinaryImageId,
  } = props.resData.info;

  return (
    <div className="res-card">
      <div className="img-container">
        <img src={IMG_URL + cloudinaryImageId} alt="Restaurant Banner" />
        <div className="price-tag">{costForTwo}</div>
      </div>
      <div className="card-content">
        <div className="restaurant-name">{name}</div>
        <div className="rating-time">
          <span className="star">✪</span>
          {avgRating} {slaString}
        </div>
        <div className="cuisine">{cuisines.join(", ")}</div>
        <div className="location">{areaName}</div>
      </div>
    </div>
  );
};

//Higher Oredr Component

// eslint-disable-next-line no-unused-vars
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black z-1 rounded-lg mb-4 p-5 ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
