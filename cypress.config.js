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
     
      // config.specPattern = [
      //  "cypress/e2e/blogdoagi/tests/test01.CT001.cy.ts",
      //  "cypress/e2e/blogdoagi/tests/test02.CT002.cy.ts",
      // ];
      
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


   


