describe("Hillarys Appointment Page Test", function() {
  it("", function() {
    cy.visit("https://www.hillarys.co.uk/arrange-an-appointment/");

    //Step 1
    cy.get('[data-products="Blinds"]').click();
    cy.get('[data-products="Curtains"]').click();
    cy.get('[data-products="Conservatory-roof-blinds"]').click();

    cy.get("[data-next-section]")
      .eq(0)
      .click();
  });
});
