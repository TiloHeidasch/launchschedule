describe("NASA Images", () => {
  beforeEach(() => {
    cy.visit("/#/nasa");
  });
  it("should say NASA Images in title", () => {
    cy.get("ion-title").should("contain", "NASA Images");
  });
  describe("URL", () => {
    it("should default to Astro Image of the Day", () => {
      cy.url().should("contain", "/#/nasa/astro");
    });
  });
  describe("Menu", () => {
    it("should have a tab-bar", () => {
      cy.get("ion-tab-bar").should("exist");
    });
    it("should have 4 tab-menu items", () => {
      cy.get("ion-tab-button").should("have.length", 4);
    });
    it("should navigate to RCKET", () => {
      cy.get("#tab-button-astro").click();
      cy.url().should("contain", "/#/nasa/astro");
    });
    it("should navigate to Blue Marble", () => {
      cy.get("#tab-button-marble").click();
      cy.url().should("contain", "/#/nasa/marble");
    });
    it("should navigate to Curiosity", () => {
      cy.get("#tab-button-curiosity").click();
      cy.url().should("contain", "/#/nasa/curiosity");
    });
    it("should navigate to Perseverance", () => {
      cy.get("#tab-button-perseverance").click();
      cy.url().should("contain", "/#/nasa/perseverance");
    });
  });
});
