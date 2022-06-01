describe("About Stuff-in-Space", () => {
  beforeEach(() => {
    cy.visit("/#/about/stuff-in-space");
  });
  it("should say About in title", () => {
    cy.get("ion-title").should("contain", "About");
  });
  it("should have 1 Cards", () => {
    cy.get("ion-card").should("have.length", 1);
  });
  describe("Stuff in Space", () => {
    it("should exist", () => {
      cy.get(":nth-child(1) > ion-card")
        .contains("Stuff in Space")
        .should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(1) > ion-card ion-card-subtitle").should(
          "contain",
          "Spaceflight-related news articles, blogs and reports"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(1) > ion-card ion-card-title").should(
          "contain",
          "Stuff In Space"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "Stuff in Space is a realtime 3D map of objects in Earth orbit, visualized using WebGL."
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "The website updates daily with orbit data from Space-Track.org and uses the excellent satellite.js Javascript library to calculate satellite positions."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(1) > ion-card .item").should("have.length", 3);
      });
      it("should have Stuff in Space Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should(
          "contain",
          "Stuff in Space"
        );
      });
      it("should have Github Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should("contain", "Github");
      });
      it("should have Contact Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should(
          "contain",
          "Contact the Author"
        );
      });
    });
  });
});
