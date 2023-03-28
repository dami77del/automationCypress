const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 4200,

  env: {
    URL: "https://www.rahulshettyacademy.com/"
  },
  retries:{
    runMode:1,

  },
  projectId: "q7hxaf",
  CYPRESS_RECORD_KEY:'4da8e755-c335-488c-94a9-b811e0937469',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
