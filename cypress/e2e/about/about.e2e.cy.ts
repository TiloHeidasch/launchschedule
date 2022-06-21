describe("About", () => {
  beforeEach(() => {
    cy.visit("/#/about");
  });
  it("should say About in title", () => {
    cy.get("ion-title").should("contain", "About");
  });
  describe("URL", () => {
    it("should default to RCKET", () => {
      cy.url().should("contain", "/#/about/rcket");
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
      cy.get("#tab-button-rcket").click();
      cy.url().should("contain", "/#/about/rcket");
    });
    it("should navigate to LL2", () => {
      cy.get("#tab-button-ll2").click();
      cy.url().should("contain", "/#/about/ll2");
    });
    it("should navigate to NASA", () => {
      cy.get("#tab-button-nasa").click();
      cy.url().should("contain", "/#/about/nasa");
    });
    it("should navigate to SNAPI", () => {
      cy.get("#tab-button-snapi").click();
      cy.url().should("contain", "/#/about/snapi");
    });
  });
});
