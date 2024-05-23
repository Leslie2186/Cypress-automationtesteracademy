/// <reference types="cypress"/>

describe("Premier Test", () => {
  before(() => {
    cy.log("Avant tous");
  });
  beforeEach(() => {
    cy.log("Avant chaque");
    cy.visit("https://demo.applitools.com/");
  });
  after(() => {
    cy.log("apres tous");
  });
  afterEach(() => {
    cy.log("apres chaque");
  });
  it("Visiter un site", function () {
    // cy.viewport("ipad-2");

    cy.get("#usernam", { timeout: 5000 })
      .type("Halima")
      .should("have.value", "Halima");
    //cy.pause();
    cy.wait(1000);
    cy.get('[placeholder="Enter your password"]')
      .type("123password")
      .should("have.value", "123password");
    cy.get(".form-check-input").check().uncheck();
    cy.contains("Remember Me").click();
    //cy.screenshot("capture");
    cy.contains("Sign in").click().should("have.text", "Sign in");
    cy.url().should("eq", "https://demo.applitools.com/app.html");
    cy.get("#time")
      .should("be.visible")
      .and("have.text", "Your nearest branch closes in: 30m 5s");
    cy.get("#time").should("be.visible").and("contain.text", "Your nearest");
  });

  it.only("scenario 2", function () {
    // cy.get(".form-control")
    //   .first()
    //   .type("Halima")
    //   .should("have.value", "Halima");
    //cy.get(".form-control").eq(0).type("Halima").should("have.value", "Halima");

    cy.get(".form-group").find("#username").type("user");
    cy.wait(1000);
    // cy.get(".form-control")
    //   .last()
    //   .type("123password")
    //   .should("have.value", "123password");
    cy.get(".form-control")
      .eq(1)
      .type("123password")
      .should("have.value", "123password");

    cy.get(".form-check-input").check().uncheck();
    cy.contains("Remember Me").click();

    cy.contains("Sign in").click().should("have.text", "Sign in");
    cy.url().should("eq", "https://demo.applitools.com/app.html");
    cy.get("#time")
      .should("be.visible")
      .and("have.text", "Your nearest branch closes in: 30m 5s");
    cy.get("#time").should("be.visible").and("contain.text", "Your nearest");
  });
});