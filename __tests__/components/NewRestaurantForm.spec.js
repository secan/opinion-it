/// <reference types="jest" />

import React from "react";
import { mount } from "enzyme";
import NewRestaurantForm from "../../src/components/NewRestaurantForm";
// import react-materialize JS to avoid Uncaught [ReferenceError: M is not defined]
import "../../node_modules/materialize-css/dist/js/materialize.min.js";

describe("<NewRestaurantForm />", () => {
    describe("cliclking the save button", () => {
        it("calls the onSave handler", () => {
            const saveHandler = jest.fn();
            const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);
            const restaurantName = "Miyaki";
            const restaurantInput = wrapper.find(
                "input[data-test='restaurantName']"
            );
            const saveButton = wrapper.find(
                "button[data-test='saveRestaurantBtn']"
            );

            expect(restaurantInput.getDOMNode() === document.activeElement);

            restaurantInput.simulate("change", {
                target: { value: restaurantName },
            });
            saveButton.simulate("click");

            expect(saveHandler).toHaveBeenCalledWith(restaurantName);
        });
    });
});
