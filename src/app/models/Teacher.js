const {date} = require('../../lib/utils')

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
        degree,
        created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id
`

    const values = [
        data.avatar_url,
        data.name,
        date(data.birth).iso,
        date(Date.now()).iso,
        data.gender,
        data.services,
        data.degree
    ]
    db.query(query, values, function(err, results) {
        if(err) return res.send("Database Error!")

        callback(results.rows[0])
    })
  },
  find(id, callback) {
    db.query(`
    SELECT * 
    FROM teachers 
    WHERE id = $1`, [id], function(err, results) {
      if(err) return res.send("Database Error!")
      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
    UPDATE instructors SET
      avatar_url=($1),
      name=($2),
      birth=($3),
      gender=($4),
      services=($5),
      degree=($6)
    WHERE id = $6
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      data.gender,
      data.services,
      data.degree,
      data.id

    ]
    db.query(query, values, function (err, results) {
      if(err) return res.send("Database Error!")

        callback()
    })
  }

}