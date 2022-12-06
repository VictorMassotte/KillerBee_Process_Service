const mssqlcon = require('../../database/index');

class processMSSql {

    async getAllProcess(){
        const con = await mssqlcon.getConnection();
        const res = await con.request().query('SELECT * FROM process');

        return res.recordset;
    }

    async getProcessById(id){
        const con = await mssqlcon.getConnection();
        const res = await con.request().input('id', id).query('SELECT * FROM process WHERE id = @id');
        return res.recordset;
    }

    async addProcess(prod) {
        console.log(prod);
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("name", prod.name)
        .input("description", prod.description)
        .input("modele", prod.modele)
        .input("etapes", prod.etapes)
        .input("test", prod.test)
        .execute("dbo.InsertProcess");
        return res;
    }

    async updateProcess(id, prod) {
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("id", id)
        .input("name", prod.name)
        .input("description", prod.description)
        .input("modele", prod.modele)
        .input("etapes", prod.etapes)
        .input("test", prod.test)
        .execute("dbo.updateProcess");
        return res;
      }

      async deleteProcess(id) {
        const con = await mssqlcon.getConnection();
        const res = await con.request()
        .input("id", id)
        .execute("dbo.deleteProcess");
        return res;
      }
 
}

module.exports = new processMSSql();