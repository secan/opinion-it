import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const RestaurantList = ({ restaurants }) => {
    return (
        (restaurants.length && (
            <Collection header="Restaurants">
                {restaurants.map((name, index) => (
                    <CollectionItem key={`restaurant-${index}`}>
                        {name}
                    </CollectionItem>
                ))}
            </Collection>
        )) ||
        null
    );
};

export default RestaurantList;
