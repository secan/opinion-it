import React from "react";
import RestaurantListPage from "./components/RestaurantListPage";
import { Row, Col } from "react-materialize";

const App = () => (
    <Row data-test="appContainer">
        <Col s={12} m={10} l={8} offset="m1 l2">
            <RestaurantListPage />
        </Col>
    </Row>
);

export default App;
