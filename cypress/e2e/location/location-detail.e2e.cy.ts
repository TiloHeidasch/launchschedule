describe("Location Detail", () => {
  beforeEach(() => {
    cy.visit("/#/location/12");
  });
  it("should have a title", () => {
    cy.get(".title-default").should("contain", "Cape Canaveral, FL, USA");
  });
  describe("Location Card", () => {
    it("should have an Location Card", () => {
      cy.get("app-location-detail-card").should("exist");
    });
    describe("Header", () => {
      it("should have a Card Title", () => {
        cy.get("app-location-detail-card ion-card-title").should(
          "contain",
          "Cape Canaveral, FL, USA"
        );
      });
      it("should have a Card Subtitle", () => {
        cy.get("app-location-detail-card ion-card-subtitle").should(
          "contain",
          "USA"
        );
      });
      it("should have an Image", () => {
        cy.get("#image").should("exist");
      });
    });
    describe("Content", () => {
      it("should have a Starts Count", () => {
        cy.get("#total_launch_count").should("exist");
      });
      it("should have a Landed Count", () => {
        cy.get("#total_landing_count").should("exist");
      });
    });
  });
  describe("Pad List", () => {
    it("should have a Pad List", () => {
      cy.get("#pads").should("exist");
    });
    it("should have 25 entries", () => {
      cy.get("#pads >").should("have.length", 25);
    });
  });
});
