import IMG_URL from "../utils/constant";

const RestaurentCard = (props) => {
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
      <div className="img-conatiner">
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

export default RestaurentCard;
