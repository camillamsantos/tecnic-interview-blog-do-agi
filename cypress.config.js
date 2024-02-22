const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const fs = require('fs');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      on('task', {
        readDirectory: (path) => {
          return fs.readdirSync(path);
        },
      });
    },
    baseUrl: 'https://blogdoagi.com.br/',
    chromeWebSecurity: false,
    requestTimeout: 60000,
    responseTimeout: 60000,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    execTimeout: 60000,
    taskTimeout: 60000,
  },
});


   


