import { should } from "chai";

describe("Agency Detail", () => {
  beforeEach(() => {
    cy.visit("/#/agency/121");
  });
  it("should have a title", () => {
    cy.get(".title-default").contains("SpaceX");
  });
  describe("Agency Card", () => {
    it("should have a Detail Card for the Agency", () => {
      cy.get("app-agency-detail-card").should("exist");
    });
    describe("Header", () => {
      it("should have a Card Title", () => {
        cy.get("app-agency-detail-card ion-card-title").should(
          "contain",
          "SpaceX"
        );
      });
      it("should have a Card Subtitle", () => {
        cy.get("app-agency-detail-card ion-card-subtitle").should(
          "contain",
          "SpX"
        );
      });
      it("should have an Image", () => {
        cy.get("#image").should("exist");
      });
    });
    describe("Content", () => {
      it("should have 2 Logos", () => {
        cy.get("#logos >").should("have.length", 2);
      });
      it("should have a description", () => {
        cy.get("#content").should(
          "contain",
          "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate from SLC-4E at Vandenberg Space Force Base, California, usually for polar launches. Another launch site is being developed at Boca Chica, Texas."
        );
      });
      it("should have Successful Launches", () => {
        cy.get("#content").should("contain", "Successful Launches:");
      });
    });
    describe("Buttons", () => {
      it("should have 2 Buttons", () => {
        cy.get(".links > ").should("have.length", 2);
      });
      it("should have a Wiki Button", () => {
        cy.get(".links > :nth-child(1)").should("contain", "Wiki");
      });
      it("should have a Info Button", () => {
        cy.get(".links > :nth-child(2)").should("contain", "Info");
      });
    });
  });
  describe("Rocket List", () => {
    it("should have a List of Rockets", () => {
      cy.get("#rocket-list").should("exist");
    });
    it("should have more than 10 Rockets", () => {
      cy.get("app-rocket-list-entry").should("have.length.at.least", 10);
    });
  });
  describe("Spacecraft List", () => {
    it("should have a List of Spacecrafts", () => {
      cy.get("#spacecraft-list").should("exist");
    });
    it("should have more than 5 Spacecrafts", () => {
      cy.get("app-spacecraft-list-entry").should("have.length.at.least", 5);
    });
  });
});
