describe("About RCKET", () => {
  beforeEach(() => {
    cy.visit("/#/about/rcket");
  });
  it("should say About in title", () => {
    cy.get("ion-title").should("contain", "About");
  });
  it("should have 4 Cards", () => {
    cy.get("ion-card").should("have.length", 4);
  });
  describe("Author", () => {
    it("should exist", () => {
      cy.get(":nth-child(1) > ion-card").contains("Author").should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(1) > ion-card ion-card-subtitle").should(
          "contain",
          "Author"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(1) > ion-card ion-card-title").should(
          "contain",
          "Tilo Heidasch"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "Hi, I am Tilo - creator of RCKET"
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "I am a professional Software Engineer and Enterprise Architect, currently employed at Capgemini."
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "Since my early days, I have been interested in Space. Back in 1993, my parents took me to KSC. Back then I was completely overwhelmed and was not fully able to process everything. However, upon first sight of the Space Shuttle External Tank, I appearantly called it the chocolate rocket due to its brown-ish appeal."
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "Growing older, I eventually learned how to develop mobile apps, hence I developed my first Android App - Launchschedule. Based on LaunchLibrary1."
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "Getting more experience and learning more technologies, I used the sundown of LL1 and replacement by LL2 as the trigger to create RCKET."
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "First being called Launchschedule, in a lack of a better name, I have now decided to call this App RCKET."
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "RCKET is fully open source. It uses data from TheSpaceDevs LL2 aswell as SNAPI (Space News API)"
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "If you stumble across an issue or a bug, please feel free to open an Issue in Github."
        );
        cy.get(":nth-child(1) > ion-card ion-card-content").should(
          "contain",
          "If you want to rate the App, I'd be happy if you would do so in Google Play"
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(1) > ion-card .item").should("have.length", 2);
      });
      it("should have Issues Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should("contain", "Issues");
      });
      it("should have Rate Button", () => {
        cy.get(":nth-child(1) > ion-card .item").should("contain", "Rate");
      });
    });
  });
  describe("Github", () => {
    it("should exist", () => {
      cy.get(":nth-child(2) > ion-card").contains("Github").should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(2) > ion-card ion-card-subtitle").should(
          "contain",
          "Open Source"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(2) > ion-card ion-card-title").should(
          "contain",
          "Github"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(2) > ion-card ion-card-content").should(
          "contain",
          "You can checkout the entire source code of this app is on Github."
        );
        cy.get(":nth-child(2) > ion-card ion-card-content").should(
          "contain",
          "Client contains the source code for the mobile app, aswell as the browser variant."
        );
        cy.get(":nth-child(2) > ion-card ion-card-content").should(
          "contain",
          "Server contains the source code for the Notification Automation backend."
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(2) > ion-card .item").should("have.length", 2);
      });
      it("should have Client Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should("contain", "Client");
      });
      it("should have Server Button", () => {
        cy.get(":nth-child(2) > ion-card .item").should("contain", "Server");
      });
    });
  });
  describe("Version", () => {
    it("should exist", () => {
      cy.get(":nth-child(3) > ion-card").contains("Version").should("exist");
    });
    describe("Content", () => {
      it("should have Title", () => {
        cy.get(":nth-child(3) > ion-card ion-card-title").should(
          "contain",
          "Version"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(3) > ion-card ion-card-content").should(
          "contain",
          "Codename: 000000"
        );
        cy.get(":nth-child(3) > ion-card ion-card-content").should(
          "contain",
          "Version Code: 1001"
        );
      });
    });
  });
  describe("Credits", () => {
    it("should exist", () => {
      cy.get(":nth-child(4) > ion-card").contains("Credit").should("exist");
    });
    describe("Content", () => {
      it("should have subtitle", () => {
        cy.get(":nth-child(4) > ion-card ion-card-subtitle").should(
          "contain",
          "Credit"
        );
      });
      it("should have Title", () => {
        cy.get(":nth-child(4) > ion-card ion-card-title").should(
          "contain",
          "Open Source Licenses"
        );
      });
      it("should have Text", () => {
        cy.get(":nth-child(4) > ion-card ion-card-content").should(
          "contain",
          "Some contents of this app are taken from other creators under an Open Source License"
        );
        cy.get(":nth-child(4) > ion-card ion-card-content").should(
          "contain",
          "Satellite Icon: CC BY - Edward Boatman"
        );
        cy.get(":nth-child(4) > ion-card ion-card-content").should(
          "contain",
          "Font: Public domain, GPL, OFL - Eduardo Tunni"
        );
        cy.get(":nth-child(4) > ion-card ion-card-content").should(
          "contain",
          "Placeholder: Inspired by - Ryte Magazine"
        );
      });
    });
    describe("Buttons", () => {
      it("should have Buttons", () => {
        cy.get(":nth-child(4) > ion-card .item").should("have.length", 3);
      });
      it("should have Satellite Button", () => {
        cy.get(":nth-child(4) > ion-card .item").should(
          "contain",
          "Satellite by Edward Boatman"
        );
      });
      it("should have Font Button", () => {
        cy.get(":nth-child(4) > ion-card .item").should(
          "contain",
          "Font by Eduardo Tunni"
        );
      });
      it("should have 404 Button", () => {
        cy.get(":nth-child(4) > ion-card .item").should(
          "contain",
          "Ryte 404 Page"
        );
      });
    });
  });
});
