describe("About LL2", () => {
  beforeEach(() => {
    cy.visit("/#/about/ll2");
  });
  it("should say About in title", () => {
    cy.get("ion-title").should("contain", "About");
  });
  it("should have 2 Cards", () => {
    cy.get("ion-card").should("have.length", 2);
  });
  describe("Launch Library 2", () => {
    it("should exist", () => {
      cy.get(":nth-child(1) > ion-card")
        .contains("Launch Library 2")
        .should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(1) > ion-card ion-card-subtitle").should(
          "contain",
          "Rocket launches, space events and crewed spaceflight"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(1) > ion-card ion-card-title").should(
          "contain",
          "Launch Library 2"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "The Launch Library 2 API is the official successor of the popular Launch Library API. It keeps its core features whilst also including everything the broader Space Launch Now API had to offer. The result is a large database delivering a more complete experience for each rocket launch and space event. The philosophy behind the API also remains unchanged : the entire database is accessible to everyone, for free."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(1) > ion-card .item").should("have.length", 2);
      });
      it("should have LL2 Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should(
          "contain",
          "Launch Library 2"
        );
      });
      it("should have API Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should(
          "contain",
          "API Documentation"
        );
      });
    });
  });
  describe("The Space Devs", () => {
    it("should exist", () => {
      cy.get(":nth-child(2) > ion-card")
        .contains("The Space Devs")
        .should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(2) > ion-card ion-card-subtitle").should(
          "contain",
          "Network & Public APIs"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(2) > ion-card ion-card-title").should(
          "contain",
          "The Space Devs"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(2) > ion-card ion-card-content").should(
          "contain",
          "The Space Devs is a group of space enthusiast developers working on a range of services, united in a common goal to improve public knowledge and accessibility of spaceflight information. We aim to bring space app developers together into a thriving community by providing helpful data and tools, accessible to everyone for free."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(2) > ion-card .item").should("have.length", 5);
      });
      it("should have Space Devs Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should(
          "contain",
          "The Space Devs"
        );
      });
      it("should have Discord Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should("contain", "Discord");
      });
      it("should have Reddit Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should("contain", "Reddit");
      });
      it("should have YouTube Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should("contain", "YouTube");
      });
      it("should have Support Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should(
          "contain",
          "Support The Space Devs"
        );
      });
    });
  });
});
