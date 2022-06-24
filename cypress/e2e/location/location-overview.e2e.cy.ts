describe("Agency Overview", () => {
  beforeEach(() => {
    cy.visit("/#/location");
  });
  it("should have a title", () => {
    cy.get("#title").contains("Facilities");
  });
  describe("Filter", () => {
    it("should have a filter button", () => {
      cy.get("#filter").should("exist");
    });
    it("should not show the filter when the button is not clicked", () => {
      cy.get(":nth-child(1) > ion-toolbar").should("have.length", 1);
    });
    it("should show the filter when the button is clicked", () => {
      cy.get("#filter").click();
      cy.get(":nth-child(1) > ion-toolbar").should("have.length", 3);
    });
    it("should not show the filter when the button is clicked twice", () => {
      cy.get("#filter").click();
      cy.get("#filter").click();
      cy.get(":nth-child(1) > ion-toolbar").should("have.length", 1);
    });
  });
  describe("Items", () => {
    it("should have at least 24 Items", () => {
      cy.get("app-location-list-entry").should("have.length.at.least", 24);
    });
  });
});
