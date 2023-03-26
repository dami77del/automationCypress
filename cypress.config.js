const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout:4200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
  },
});
