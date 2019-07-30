describe("My First Passing Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
});

describe("My First Failing Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(false);
  });
});

describe("My First Example Test", function() {
  it("Visits the Kitchen Sink", function() {
    cy.visit("https://example.cypress.io");
  });
});

describe("My First Hillary's Test", function() {
  it("Visits the Hillarys site", function() {
    cy.visit("https://www.hillarys.co.uk/arrange-an-appointment/");
  });
});

describe("My First Assertion", function() {
  it("Visit google and searches for something", function() {
    cy.visit("https://www.codecomputerlove.com/");

    cy.get(".section-header__title")
      .should("have.text", "We create brilliant digital products and services.")
      .and("have.html", "We create brilliant digital products and services.");
  });
});
