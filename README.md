# Cypress

## Setup -

run `npm install`

run `npm run cypress:verify` (This checks to see if Cypress can run on your machine)

## Building a test:

All tests sit in the `cypress/integration` folder which is where we will make the test.

Create a file such as `[insert test name here].js` an example can be `application_form.js` .

Running the command `npm run cypress` will open up the Cypress GUI which will list all the tests in your `cypress/integration` folder, clicking one of those should open up the test runner

You can also run the tests without the GUI and get a command line response, this will generate screenshots for failing tests so you can debug and also generate videos of running tests in the browser.

## First passing/failing test:

Cypress gets `describe and it` from Mocha

and `expect` from Chai.

You can very easily switch one of the `true` to a `false` to make it fail and make your first failing test.

[Assertions](https://docs.cypress.io/guides/references/assertions.html#Chai-jQuery)

    describe("My First Passing Test", function() {
      it("Does not do much!", function() {
        expect(true).to.equal(true);
      });
    });

## Let's visit a real page

Cypress uses `cy` as the prefix for any command, a lot of the commands using `cy` are syntactic sugar for JQuery commands.

In order to go to a page you call `cy.visit("https://www.google.com")` and add the url into the visit command. When you run this you should see the Cypress GUI take you to that page.

[Visit](https://docs.cypress.io/api/commands/visit.html#Syntax)

    describe("My First Example Test", function() {
      it("Visits the Kitchen Sink", function() {
        cy.visit("https://example.cypress.io");
      });
    });

## Let's start testing some real things

We know how to visit a page but now we need to select an element on the page to test or interact with, to do this we use `cy.get(Insert query here)` this will get you element, you can query by element, class, id and data attribute just like in standard JavaScript.

Once we have that we can create an assertion, in order to do this we use `.should()` and pipe this after a `.get()` the reason for this is we want to assert the element we just got and nothing else. This should look like `cy.get().should()` and on top of that if you want to make two assertions against the same element you can pipe and `.and()` so it will look something like `cy.get().should().and()`.

`.should()` and `.and()` both have multiple overloads, the first can be something like `.should("be.empty")` almost written in plain text, the second is `.should("have.text", "Hello, World!")`. There are two more overloads I have never had to use but you can read more about them below.

[Should](https://docs.cypress.io/api/commands/should.html)

[And](https://docs.cypress.io/api/commands/and.html)

    describe("My First Assertion", function() {
      it("Visit google and searches for something", function() {
        cy.visit("https://www.codecomputerlove.com/");

        cy.get(".section-header__title")
          .should("have.text", "We create brilliant digital products and services.")
          .and("have.html", "We create brilliant digital products and services.");
      });
    });

# Resources

The kitchen sink is a live example site created by Cypress to test the capabilities of Cypress

[Kitchen Sink](https://example.cypress.io/)
