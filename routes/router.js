const processMySQL = require('../modules/process/process.mssql');

class process {

    async getAllProcess(req, res) {
        try {
            const output = await processMySQL.getAllProcess();
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async getProcessById(req, res) {
        try {
            const output = await processMySQL.getProcessById(req.params.id);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async addProcess(req, res) {
        try {
            const output = await processMySQL.addProcess(req.body);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async updateProcess(req, res) {
        try {
            const output = await processMySQL.updateProcess(req.params.id, req.body);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }

    async deleteProcess(req, res) {
        try {
            const output = await processMySQL.deleteProcess(req.params.id);
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new process();