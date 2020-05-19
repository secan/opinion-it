import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Button, TextInput } from "react-materialize";

const NewRestaurantForm = ({ onSave }) => {
    const [restaurantName, setRestaurantName] = useState();
    const inputRestaurant = useRef(null);

    useEffect(() => {
        inputRestaurant.current.focus();
    }, []);

    const handleSave = () => {
        onSave(restaurantName);
    };

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <Row>
                <Col s={6} m={8} l={10}>
                    <TextInput
                        s={12}
                        data-test="restaurantName"
                        ref={inputRestaurant}
                        label="Restaurant Name"
                        type="text"
                        onChange={(evt) => setRestaurantName(evt.target.value)}
                    />
                </Col>
                <Col s={6} m={4} l={2}>
                    <Button
                        large
                        style={{ width: "100%" }}
                        data-test="saveRestaurantBtn"
                        type="submit"
                        onClick={() => handleSave()}
                    >
                        Save
                    </Button>
                </Col>
            </Row>
        </form>
    );
};

export default NewRestaurantForm;
