//importing pg module
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'lwfnxmoa',
  host: 'batyr.db.elephantsql.com',
  database: 'lwfnxmoa',
  password: 'G_bAhvLb4YBEbO_yflN-XbalW2fwmHvd',
  port: 5432,
})

//exporting query capabilities to server.js
module.exports = {
    query: (text, params) => pool.query(text, params),
  }