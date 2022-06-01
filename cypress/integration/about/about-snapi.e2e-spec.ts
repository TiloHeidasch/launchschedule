describe("About SNAPI", () => {
  beforeEach(() => {
    cy.visit("/#/about/snapi");
  });
  it("should say About in title", () => {
    cy.get("ion-title").should("contain", "About");
  });
  it("should have 2 Cards", () => {
    cy.get("ion-card").should("have.length", 2);
  });
  describe("Spaceflight News API", () => {
    it("should exist", () => {
      cy.get(":nth-child(1) > ion-card")
        .contains("Spaceflight News API")
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
          "Spaceflight News API"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "The Spaceflight News API, or SNAPI for short, started because Derk Weijers wanted an app where he could easily check the latest spaceflight news. As a Linux Engineer by profession, he had some experience with programming, but never had he developed a mobile app. At the start of 2018, he started following an online course for mobile app development (React Native). While doing so, he also started planning the app, and soon came to the conclusion that he would first need to build an API as a uniform interface to get data into his app. The Spaceflight News API was born."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(1) > ion-card .item").should("have.length", 2);
      });
      it("should have SNAPI Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should(
          "contain",
          "Spaceflight News API"
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
