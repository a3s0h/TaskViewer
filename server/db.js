const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "task",
    password:"89498955",
    port: 5432,
})

module.exports = pool;