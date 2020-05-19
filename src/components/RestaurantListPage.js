import React, { useState } from "react";
import { Button, Row, Col } from "react-materialize";
import NewRestaurantForm from "./NewRestaurantForm";
import RestaurantList from "./RestaurantList";

const RestaurantListPage = () => {
    const [restaurantNames, setRestaurantNames] = useState([]);
    const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

    const handleNewRestaurant = (restaurantName) => {
        restaurantName &&
            setRestaurantNames([restaurantName, ...restaurantNames]);
        setShowNewRestaurantForm(false);
    };

    const renderNewRestaurantForm = () => {
        return (
            (showNewRestaurantForm && (
                <NewRestaurantForm onSave={handleNewRestaurant} />
            )) || (
                <Button
                    data-test="addRestaurantBtn"
                    onClick={() => setShowNewRestaurantForm(true)}
                >
                    Add Restaurant
                </Button>
            )
        );
    };

    return (
        <div>
            <Row>
                <Col s={12}>{renderNewRestaurantForm()}</Col>
            </Row>
            {(restaurantNames.length && (
                <Row>
                    <Col s={12}>
                        <RestaurantList restaurants={restaurantNames} />
                    </Col>
                </Row>
            )) ||
                null}
        </div>
    );
};

export default RestaurantListPage;
