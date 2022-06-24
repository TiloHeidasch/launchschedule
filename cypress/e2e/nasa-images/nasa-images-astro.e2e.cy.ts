describe("NASA Images Astro Image Of the Day", () => {
  beforeEach(() => {
    cy.visit("/#/nasa/astro");
  });
  it("should say NASA Images in title", () => {
    cy.get("ion-title").should("contain", "NASA Images");
  });
  it("should have 1 Cards", () => {
    cy.get("ion-card").should("have.length", 1);
  });
  describe("Astro Image of the Day", () => {
    it("should exist", () => {
      cy.get("ion-card").should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get("ion-card ion-card-subtitle").should("exist");
      });
      it("should have Title", () => {
        cy.get("ion-card ion-card-title").should("exist");
      });
      it("should have Text", () => {
        cy.get("ion-card ion-card-content").should("exist");
      });
    });
  });
});
