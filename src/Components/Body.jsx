import { useState } from "react";
import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import mockData from "../utils/mockData";
const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(mockData);
  let [filteredRestaurants, setFilteredRestaurants] = useState(mockData);
  let [searchText, setSearchText] = useState("");

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
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
