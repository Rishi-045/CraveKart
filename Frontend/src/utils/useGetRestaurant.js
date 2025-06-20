import { useState, useEffect } from "react";

const useGetRestaurant = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    //fetch data from swiggy api

    try {
      let fetchData = async () => {
        const swiggyURL = import.meta.env.VITE_RES_API_URL;
        const proxyURL = `http://localhost:5000/swiggy?url=${encodeURIComponent(
          swiggyURL
        )}`;

        let data = await fetch(proxyURL);
        let json = await data.json();
        console.log(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
        setListOfRestaurants(
          json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      };
      fetchData();
    } catch (err) {
      console.log("failed to fetch data ...", err);
    }
  }, []);

  return listOfRestaurants;
};

export default useGetRestaurant;
