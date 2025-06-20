import cottonSwabIcon from "../../assets/cottonSwabIcon.png";
import Shimmer from "../shimmer/Shimmer";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantMenuCards from "./RestaurantMenuCard";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const [openSection, setOpenSection] = useState(null);
  let { resId } = useParams();

  const { resMenu, accordianList } = useRestaurantMenu(resId);

  let restaurantInfo = resMenu?.cards[2]?.card?.card?.info;

  // If restaurantInfo is not ready, show shimmer

  if (!restaurantInfo) {
    return <Shimmer />;
  }

  // Now safely take out value
  let {
    name,
    city,
    costForTwoMessage,
    cuisines,
    avgRating,
    sla,
    totalRatingsString,
  } = restaurantInfo;

  // Safely get slaString from sla (it may not exist)

  let slaString = sla?.slaString;



  return (
    <div className="Restaurent-menu-container">
      <div className="upper-Container">
        <div className="restaurant-name">
          <h1>{name}</h1>
        </div>
        <div className="about-restaurant">
          <div className="res-rating">
            <p className="item-1">
              <span>✪</span> {avgRating} ({totalRatingsString})
            </p>
            <p className="item-2">{costForTwoMessage}</p>
          </div>
          <div className="res-menu-cuisines">
            <p>{cuisines.join(",")}</p>
          </div>
          <div className="res-address-time">
            <div>
              <img src={cottonSwabIcon} />
            </div>
            <div className="left-conatiner">
              <div>
                Outlet{" "}
                <span>
                  {city} <span>▼</span>
                </span>
              </div>
              <div>{slaString}</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="horizontal-line1" />

      <div className="flex flex-col gap-12  mt-4">
        {accordianList.map((i,index) => (
          <div key={i.card.card.title} className=" flex flex-col gap-10 cursor-pointer" onClick={()=>{
            setOpenSection(openSection===index?null:index)
          }}>
            <div
              className="flex justify-between mb-24"
              
            >
              <h1 className="font-semibold text-[1.23rem] ">
                {i.card.card.title} ({i.card.card.itemCards.length})              </h1>
              <span>⮟</span>
            </div>
            {openSection===index && (
              <div className="flex flex-col gap-12 ">
                {i.card.card.itemCards.map((res) => (
                  <React.Fragment key={res?.card?.info?.id}>
                    <RestaurantMenuCards resMenu={res} />
                    <hr className="horizontal-line2" />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
