class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const userProcess = require('../Controllers/process.controller');
    new userProcess(this.app);
   }
  }
  
  module.exports = Module;