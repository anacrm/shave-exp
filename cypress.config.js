const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  e2e: {

    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  }
});
