describe("Astronaut Detail", () => {
  beforeEach(() => {
    cy.visit("/#/astronaut/30");
  });
  it("should have a title", () => {
    cy.get(".title-default").should("contain", "Neil Armstrong");
  });
  describe("Astronaut Card", () => {
    it("should have an Agency Card", () => {
      cy.get("app-astronaut-detail-card").should("exist");
    });
    describe("Header", () => {
      it("should have a Card Title", () => {
        cy.get("app-astronaut-detail-card ion-card-title").should(
          "contain",
          "Neil Armstrong"
        );
      });
      it("should have a Card Subtitle", () => {
        cy.get("app-astronaut-detail-card ion-card-subtitle").should(
          "contain",
          "American"
        );
      });
      it("should have an Image", () => {
        cy.get("#image").should("exist");
      });
    });
    describe("Content", () => {
      it("should have a Born Date", () => {
        cy.get("#born").should("contain", "*1930-08-05");
      });
      it("should have a Death Date", () => {
        cy.get("#died").should("contain", "†2012-08-25");
      });
      it("should have a Bio", () => {
        cy.get("#bio").should(
          "contain",
          "Neil Alden Armstrong was an American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor."
        );
      });
    });
  });
  describe("Agency Card", () => {
    it("should have an Agency Card", () => {
      cy.get("app-agency-list-entry").should("exist");
    });
  });
  describe("Launch List", () => {
    it("should have a Launch List", () => {
      cy.get("#launch-list").should("exist");
    });
    it("should have 2 entries", () => {
      cy.get("#launch-list >").should("have.length", 2);
    });
  });
});
