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

    //Step 2
    cy.get("[data-postcode-enter-manually]").click();

    cy.get("#buildingNumber").type("7");
    cy.get("#addressline1").type("Dale Street");
    cy.get("#addressline3").type("Lancashire");
    cy.get("#town").type("Manchester");
    cy.get("#postcode").type("M1 1JA");

    cy.get("[data-next-section]")
      .eq(1)
      .click();
  });
});
