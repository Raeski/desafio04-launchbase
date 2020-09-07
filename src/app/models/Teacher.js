const {age, date} = require('../../lib/utils')

const db = require('../../config/db')

module.exports = {
  all(callback){
    db.query(`SELECT * FROM teachers`, function(err, results) {
      if(err) return res.send("Database Error!")

      callback(results.rows)
      
  })
  },
  create(data, callback){
    const query = `
    INSERT INTO teachers (
        avatar_url,
        name,
        birth,
        gender,
        services,
        degree
    ) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id
`

    const values = [
        data.avatar_url,
        data.name,
        date(data.birth).iso,
        data.gender,
        data.services,
        data.degree
    ]
    db.query(query, values, function(err, results) {
        if(err) return res.send("Database Error!")

        callback(results.rows[0])
    })
  },
}