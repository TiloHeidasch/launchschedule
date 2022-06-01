describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should have a title", () => {
    cy.get("title").contains("RCKET");
  });
  describe("URL", () => {
    it("should default to Launch", () => {
      cy.url().should("contain", "/#/launch");
    });
    it("should default to Launch on unknown path", () => {
      cy.visit("/#/unknown");
      cy.url().should("contain", "/#/launch");
    });
  });
  describe("Menu", () => {
    describe("Mobile", () => {
      beforeEach(() => {
        cy.viewport(400, 840);
        cy.get("ion-menu-button").click();
      });
      it("should have a menu list", () => {
        cy.get("#menu-list").should("be.visible");
      });
      it("should show the RCKET Logo", () => {
        cy.get("ion-img.ng-star-inserted").should("be.visible");
      });
      it("should have 16 menu items", () => {
        const menuItems = cy.get("ion-menu-toggle").should("have.length", 16);
      });
      it("should navigate to Launch", () => {
        cy.visit("/#/event");
        cy.url().should("contain", "/#/event");
        cy.get("ion-item").contains("Launch").click();
        cy.url().should("contain", "/#/launch");
      });
      it("should navigate to Event", () => {
        cy.get("ion-item").contains("Event").click();
        cy.url().should("contain", "/#/event");
      });
      it("should navigate to Statistic", () => {
        cy.get("ion-item").contains("Statistic").click();
        cy.url().should("contain", "/#/statistic");
      });
      it("should navigate to News", () => {
        cy.get("ion-item").contains("News").click();
        cy.url().should("contain", "/#/news");
      });
      it("should navigate to 3D Solar System", () => {
        cy.get("ion-item").contains("3D Solar System").click();
        cy.url().should("contain", "/#/solar-system");
      });
      it("should navigate to Stuff In Space", () => {
        cy.get("ion-item").contains("Stuff In Space").click();
        cy.url().should("contain", "/#/stuff-in-space");
      });
      it("should navigate to NASA Images", () => {
        cy.get("ion-item").contains("NASA Images").click();
        cy.url().should("contain", "/#/nasa");
      });
      it("should navigate to Starship", () => {
        cy.get("ion-item").contains("Starship").click();
        cy.url().should("contain", "/#/dashboard/starship");
      });
      it("should navigate to Agency", () => {
        cy.get("ion-item").contains("Agency").click();
        cy.url().should("contain", "/#/agency");
      });
      it("should navigate to Astronaut", () => {
        cy.get("ion-item").contains("Astronaut").click();
        cy.url().should("contain", "/#/astronaut");
      });
      it("should navigate to Facility", () => {
        cy.get("ion-item").contains("Facility").click();
        cy.url().should("contain", "/#/location");
      });
      it("should navigate to Pad", () => {
        cy.get("ion-item").contains("Pad").click();
        cy.url().should("contain", "/#/pad");
      });
      it("should navigate to Rocket", () => {
        cy.get("ion-item").contains("Rocket").click();
        cy.url().should("contain", "/#/rocket");
      });
      it("should navigate to Spacecraft", () => {
        cy.get("ion-item").contains("Spacecraft").click();
        cy.url().should("contain", "/#/spacecraft");
      });
      it("should navigate to Spacestation", () => {
        cy.get("ion-item").contains("Spacestation").click();
        cy.url().should("contain", "/#/spacestation");
      });
    });
    describe("Desktop", () => {
      beforeEach(() => {
        cy.viewport(1500, 900);
      });
      it("should have a menu list", () => {
        cy.get("#menu-list").should("be.visible");
      });
      it("should show the RCKET Logo", () => {
        cy.get("ion-img.ng-star-inserted").should("be.visible");
      });
      it("should have 16 menu items", () => {
        const menuItems = cy.get("ion-menu-toggle").should("have.length", 16);
      });
      it("should navigate to Launch", () => {
        cy.visit("/#/event");
        cy.url().should("contain", "/#/event");
        cy.get("ion-item").contains("Launch").click();
        cy.url().should("contain", "/#/launch");
      });
      it("should navigate to Event", () => {
        cy.get("ion-item").contains("Event").click();
        cy.url().should("contain", "/#/event");
      });
      it("should navigate to Statistic", () => {
        cy.get("ion-item").contains("Statistic").click();
        cy.url().should("contain", "/#/statistic");
      });
      it("should navigate to News", () => {
        cy.get("ion-item").contains("News").click();
        cy.url().should("contain", "/#/news");
      });
      it("should navigate to 3D Solar System", () => {
        cy.get("ion-item").contains("3D Solar System").click();
        cy.url().should("contain", "/#/solar-system");
      });
      it("should navigate to Stuff In Space", () => {
        cy.get("ion-item").contains("Stuff In Space").click();
        cy.url().should("contain", "/#/stuff-in-space");
      });
      it("should navigate to NASA Images", () => {
        cy.get("ion-item").contains("NASA Images").click();
        cy.url().should("contain", "/#/nasa");
      });
      it("should navigate to Starship", () => {
        cy.get("ion-item").contains("Starship").click();
        cy.url().should("contain", "/#/dashboard/starship");
      });
      it("should navigate to Agency", () => {
        cy.get("ion-item").contains("Agency").click();
        cy.url().should("contain", "/#/agency");
      });
      it("should navigate to Astronaut", () => {
        cy.get("ion-item").contains("Astronaut").click();
        cy.url().should("contain", "/#/astronaut");
      });
      it("should navigate to Facility", () => {
        cy.get("ion-item").contains("Facility").click();
        cy.url().should("contain", "/#/location");
      });
      it("should navigate to Pad", () => {
        cy.get("ion-item").contains("Pad").click();
        cy.url().should("contain", "/#/pad");
      });
      it("should navigate to Rocket", () => {
        cy.get("ion-item").contains("Rocket").click();
        cy.url().should("contain", "/#/rocket");
      });
      it("should navigate to Spacecraft", () => {
        cy.get("ion-item").contains("Spacecraft").click();
        cy.url().should("contain", "/#/spacecraft");
      });
      it("should navigate to Spacestation", () => {
        cy.get("ion-item").contains("Spacestation").click();
        cy.url().should("contain", "/#/spacestation");
      });
    });
  });
});
