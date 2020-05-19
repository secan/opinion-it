/// <reference types="jest" />

import React from "react";
import { mount } from "enzyme";
import App from "../../src/App";
// import react-materialize JS to avoid Uncaught [ReferenceError: M is not defined]
import "../../node_modules/materialize-css/dist/js/materialize.min.js";

describe("Smoke Component Test for <App />", () => {
    it("should mount", () => {
        const wrapper = mount(<App />);
        const appContainer = wrapper.find("[data-test='appContainer']");
        expect(appContainer).toBeTruthy();
    });
});
