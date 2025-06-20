import { useEffect, useState } from "react";
//import { RES_MENU_API_URL } from "./constant";
// import mockData from "../utils/mockData";

const backendURL = import.meta.env.VITE_BACKEND_URL;


const useRestaurantMenu = (resId) => {
  let [resMenu, setResMenu] = useState(null);
   let [accordianList, setAccordianList] = useState([]);

  useEffect(() => {

    const swiggyURL = `${import.meta.env.VITE_RES_MENU_API_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`;
          
        const proxyURL = `${backendURL}/swiggy/menu?url=${encodeURIComponent(
          swiggyURL
        )}`;

    try {
      const fetchData = async () => {
        const data = await fetch(proxyURL);
        const json = await data.json();
         setResMenu(json?.data);
        setAccordianList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        
      };

       fetchData();
    } catch (error) {
      console.log("unable to fetch menu cards",error)
    }

   
  }, []);

  return { resMenu, accordianList};
};

export default useRestaurantMenu;
