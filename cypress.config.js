const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "CHCRW Test Report",
    embeddedScreenshots: true,
    screenshotOnRunFailure: true,
    inlineAssets: true,
    saveAllAttempts: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});