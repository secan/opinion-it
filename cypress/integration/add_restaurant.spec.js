/// <reference types="cypress" />

const testAddSingleRestaurant = (restaurantName) => {
    cy.get("[data-test='restaurantName']").should("not.be.visible");
    cy.get("[data-test='saveRestaurantBtn']").should("not.be.visible");
    cy.get("[data-test='addRestaurantBtn']").should("be.visible").click();

    cy.get("[data-test='addRestaurantBtn']").should("not.be.visible");
    cy.get("[data-test='restaurantName']")
        .should("be.visible")
        .type(restaurantName);
    cy.get("[data-test='saveRestaurantBtn']").should("be.visible").click();

    cy.get("[data-test='addRestaurantBtn']").should("be.visible");
    cy.get("[data-test='restaurantName']").should("not.be.visible");
    cy.get("[data-test='saveRestaurantBtn']").should("not.be.visible");
    cy.contains(restaurantName);
};

describe("Adding a restaurant", () => {
    it("insert a new restaurant", () => {
        const restaurantName = "Miyaki";

        cy.visit("/");

        testAddSingleRestaurant(restaurantName);
    });

    it("insert several new restaurants", () => {
        const restaurantNames = ["Miyaki", "33 Giri", "La Bella 'Mbriana"];

        cy.visit("/");

        restaurantNames.forEach((restaurantName) => {
            testAddSingleRestaurant(restaurantName);
        });
    });
});
