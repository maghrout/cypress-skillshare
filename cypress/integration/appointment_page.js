const viewportSizes = [[320, 480], [600, 1024], [768, 1024], [1240, 800]];

describe("Hillarys Appointment Page Test", function() {
  viewportSizes.forEach(viewportSize => {
    it(`Successfully completes form @ ${viewportSize[0]}px x ${
      viewportSize[1]
    }px`, function() {
      cy.visit("/arrange-an-appointment/");
      cy.viewport(viewportSize[0], viewportSize[1]);

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

      //Step 3
      //Normally you can only select an option from a dropdown using it's value
      //This is a nice work around for picking a random number from the dropdown not based on value
      cy.get("#selecteddate1 > option")
        .eq(3)
        .then(element => cy.get("#selecteddate1").select(element.val()));
      cy.get("#selectedtime1").select("09:00 - 12:00");

      cy.get("#selecteddate2 > option")
        .eq(4)
        .then(element => cy.get("#selecteddate2").select(element.val()));
      cy.get("#selectedtime2").select("09:00 - 12:00");

      cy.get("#selecteddate3 > option")
        .eq(5)
        .then(element => cy.get("#selecteddate3").select(element.val()));
      cy.get("#selectedtime3").select("09:00 - 12:00");

      cy.get("[data-next-section]")
        .eq(2)
        .click();

      //Step 4

      cy.get("#mr").click();
      cy.get("#firstName").type("Testing");
      cy.get("#surname").type("Tester");
      cy.get("#emailAddress").type("apache@codecomputerlove.com");
      cy.get("#ConfirmEmailAddress").type("apache@codecomputerlove.com");
      cy.get("#telephone").type("07777777777");

      cy.get("[data-form-submit]")
        .eq(0)
        .click();

      //Confirmation
      cy.url().should(
        "eq",
        "https://www.dev.hillarys.hblonline.co.uk/arrange-an-appointment/confirmation/"
      );
    });
  });

  it("Validation message should appear if second date is not picked", function() {
    cy.visit("/arrange-an-appointment/");

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

    //Step 3
    //Normally you can only select an option from a dropdown using it's value
    //This is a nice work around for picking a random number from the dropdown not based on value
    cy.get("#selecteddate1 > option")
      .eq(3)
      .then(element => cy.get("#selecteddate1").select(element.val()));
    cy.get("#selectedtime1").select("09:00 - 12:00");

    //Uncomment to make test fail
    // cy.get("#selecteddate2 > option")
    //   .eq(4)
    //   .then(element => cy.get("#selecteddate2").select(element.val()));
    // cy.get("#selectedtime2").select("09:00 - 12:00");

    cy.get("[data-next-section]")
      .eq(2)
      .click();

    // //Confirmation
    cy.get("[data-appointment-times-error-message]").should("be.visible");
  });

  it("Validation message should appear if first date is not picked", function() {
    cy.visit("/arrange-an-appointment/");

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

    //Step 3
    //Normally you can only select an option from a dropdown using it's value
    //This is a nice work around for picking a random number from the dropdown not based on value

    //Uncomment to make test fail
    // cy.get("#selecteddate1 > option")
    //   .eq(3)
    //   .then(element => cy.get("#selecteddate1").select(element.val()));
    // cy.get("#selectedtime1").select("09:00 - 12:00");

    cy.get("#selecteddate2 > option")
      .eq(4)
      .then(element => cy.get("#selecteddate2").select(element.val()));
    cy.get("#selectedtime2").select("09:00 - 12:00");

    cy.get("[data-next-section]")
      .eq(2)
      .click();

    // //Confirmation
    cy.get("[data-appointment-times-error-message]").should("be.visible");
  });
});
