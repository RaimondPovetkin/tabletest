const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "RFveitr",
    host: "localhost",
    port: 5432,
    database: "maintable"
})

module.exports = pool