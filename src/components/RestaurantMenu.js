import {useEffect, useState} from "react";
import responseData from "../data/restmenu-response.json";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const json = await responseData;
        setResInfo(json.data);
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

    console.log(itemCards);

    return (resInfo === null) ? <Shimmer/> : (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
            {itemCards.map((itemCard) => (
                <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name} - Rs.{(itemCard?.card?.info?.price / 100) || (itemCard?.card?.info?.defaultPrice / 100)}</li>
            ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;