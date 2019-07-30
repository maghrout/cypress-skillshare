# Cypress

# Steps:

## Setup -

run `npm install`

run `npm run cypress:verify` (This checks to see if cypress can run on your machine)

## Building a test:

All tests sit in the `cypress/integration` folder which is where we will make the test.

Create a file such as `[insert test name here].js` an example can be `application_form.js` .

Running the command `npm run cypress` will open up the cypress gui which will list all the tests in your `cypress/integration` folder, clicking one of those should open up the test runner

## First passing test:

    describe("My First Passing Test", function() {
      it("Does not do much!", function() {
        expect(true).to.equal(true);
      });
    });

Cypress gets `describe and it` from Mocha

and `expect` from Chai.

You can very easily switch one of the `true` to a `false` to make it fail and make your first failing test.

#Resources
[Kitchen Sink](https://example.cypress.io/)
