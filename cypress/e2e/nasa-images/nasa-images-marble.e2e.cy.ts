describe("NASA Images Blue Marble", () => {
  beforeEach(() => {
    cy.visit("/#/nasa/marble");
  });
  it("should say NASA Images in title", () => {
    cy.get("ion-title").should("contain", "NASA Images");
  });
  describe("Items", () => {
    it("should have at least 1 Item", () => {
      cy.get("app-blue-marble-list-entry").should("have.length.at.least", 1);
    });
  });
});
