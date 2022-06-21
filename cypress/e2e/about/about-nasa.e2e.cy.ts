describe("About NASA", () => {
  beforeEach(() => {
    cy.visit("/#/about/nasa");
  });
  it("should say About in title", () => {
    cy.get("ion-title").should("contain", "About");
  });
  it("should have 3 Cards", () => {
    cy.get("ion-card").should("have.length", 3);
  });
  describe("{ NASA APIs }", () => {
    it("should exist", () => {
      cy.get(":nth-child(1) > ion-card")
        .contains("{ NASA APIs }")
        .should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(1) > ion-card ion-card-subtitle").should(
          "contain",
          "NASA"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(1) > ion-card ion-card-title").should(
          "contain",
          "{ NASA APIs }"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "The objective of this site is to make NASA data, including imagery, eminently accessible to application developers. The api.nasa.gov catalog is growing."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(1) > ion-card .item").should("have.length", 1);
      });
      it("should have API Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should(
          "contain",
          "API Documentation"
        );
      });
    });
  });
  describe("NASA’s Eyes", () => {
    it("should exist", () => {
      cy.get(":nth-child(2) > ion-card")
        .contains("NASA’s Eyes")
        .should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(2) > ion-card ion-card-subtitle").should(
          "contain",
          "NASA"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(2) > ion-card ion-card-title").should(
          "contain",
          "NASA’s Eyes"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(2) > ion-card ion-card-content").should(
          "contain",
          "Experience Earth and our solar system, the universe and the spacecraft exploring them, with immersive apps for Mac, PC and mobile devices."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(2) > ion-card .item").should("have.length", 1);
      });
      it("should have Homepage Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should("contain", "Homepage");
      });
    });
  });
  describe("NASA", () => {
    it("should exist", () => {
      cy.get(":nth-child(3) > ion-card").contains("NASA").should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(3) > ion-card ion-card-subtitle").should(
          "contain",
          "National Aeronautics and Space Administration"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(3) > ion-card ion-card-title").should(
          "contain",
          "NASA"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(3) > ion-card ion-card-content").should(
          "contain",
          "The National Aeronautics and Space Administration (NASA) is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(3) > ion-card .item").should("have.length", 2);
      });
      it("should have NASA Button", () => {
        cy.get(":nth-child(3) > ion-card .item").should("contain", "NASA.gov");
      });
      it("should have Wikipedia Button", () => {
        cy.get(":nth-child(3) > ion-card .item").should("contain", "Wikipedia");
      });
    });
  });
});
