const db = require('../bd')

class Controller {
    async getFields(req, res){
        const fields = await db.query("SELECT * FROM main_table")
        res.json(fields.rows)
    }
}

module.exports = new Controller()