
const process = require('../routes/router')
const express = require('express');
const router = express.Router();

class processController {
    constructor(app) {
        router.get('/', process.getAllProcess);
        router.get('/:id', process.getProcessById);
        router.post('/', process.addProcess);
        router.put('/:id', process.updateProcess);
        router.delete('/:id', process.deleteProcess);
      
      app.use('/api/v1/process', router);
    }
 }
module.exports = processController;