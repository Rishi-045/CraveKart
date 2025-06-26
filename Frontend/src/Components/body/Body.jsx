import { useEffect, useState } from "react";
import RestaurantCard, {
  withPromotedLabel,
} from "../restaurantCard/RestaurantCard";
import Shimmer from "../shimmer/Shimmer";
import { Link } from "react-router-dom";
import "./Body.css";
import useGetRestaurant from "../../utils/useGetRestaurant";

const Body = () => {
  const listOfRestaurants = useGetRestaurant();

  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  //filter-btn logic
  let filterRestaurants = () => {
    let filteredRes = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurants(filteredRes);
  };

  // filtered restaurant based on user search

  let userFilteredRes = () => {
    if (!searchText.trim()) return; // stop if searchText is empty
    let filteredRes = listOfRestaurants.filter((res) =>
      res.info.cuisines
        .toString()
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase())
    );

    setFilteredRestaurants(filteredRes);
    setSearchText("");
  };

  const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);

  //condition if dealy to fetch data from api to show shimmer ui (Conditional Rendering)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="top-bar">
        <div className="left-section">
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for dishes..."
            />
            <button className="search-btn" onClick={userFilteredRes}>
              🔍
            </button>
          </div>
        </div>
        {/* filter btn */}
        <div className="top-rated-container center-section">
          <button onClick={filterRestaurants} className="top-rated-btn">
            ⭐ Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="res-card-link"
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.avgRating > 4.6 ? (
              <RestaurantWithPromotedLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
