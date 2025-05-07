const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    baseUrl: 'https://pushing-it.vercel.app/',
  },
});
