const { Pool } = require("pg")

module.exports = new Pool ({
  user: 'raeski',
  password: 99288723,
  host: "localhost",
  port: 5432,
  database: "gymmananger"

})