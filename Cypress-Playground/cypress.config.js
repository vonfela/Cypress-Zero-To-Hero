const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://playground.bondaracademy.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 11000,   // default timout changed that Cypress native waits before returning the result, in this case we are changing in the framework level.

});
