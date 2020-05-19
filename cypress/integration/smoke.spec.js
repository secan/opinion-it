/// <reference types="cypress" />

describe("Smoke E2E Test", () => {
    it("Displays the welcome message", () => {
        cy.visit("/").contains("Hello, World!");
    });
});
