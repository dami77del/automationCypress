const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({

  defaultCommandTimeout: 4200,
  reporter:'mochawesome',
  env: {
    URL: "https://www.rahulshettyacademy.com/"
  },
  retries:{
    runMode:1,

  },
  projectId: "q7hxaf",
  CYPRESS_RECORD_KEY:'4da8e755-c335-488c-94a9-b811e0937469',
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/',
  },
});

