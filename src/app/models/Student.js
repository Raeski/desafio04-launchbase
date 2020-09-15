const {date} = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
  all(callback){
    db.query(`SELECT * FROM students`, function(err, results) {
      if(err) throw `Database Error! ${err}`
      callback(results.rows)      
  })
  },
  create(data, callback){
    const query = `
    INSERT INTO students (
        name,
        avatar_url,
        email,
        birth,
        gender,
        subject,
    ) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id
`

    const values = [
        data.avatar_url,
        data.name,
        data.email,
        date(data.birth).iso,
        data.gender,
        data.subject
    ]
    db.query(query, values, function(err, results) {
        if(err) throw `Database Error! ${err}`
        callback(results.rows[0])
    })
  },
  find(id, callback) {
    db.query(`
    SELECT * 
    FROM students 
    WHERE id = $1`, [id], function(err, results) {
      if(err) throw `Database Error! ${err}`
      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
    UPDATE students SET
      avatar_url=($1),
      name=($2),
      birth=($3),
      gender=($4),
      subject=($5),
      email=($6),
    WHERE id = $7
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      data.gender,
      data.subject,
      data.email,
      data.id

    ]
    db.query(query, values, function (err, results) {
      if(err) throw `Database Error! ${err}`
        return callback()
    })
  },
  delete(id, callback) {
    db.query(`DELETE FROM students WHERE id = $1`, [id], function (err, results){
      if(err) throw `Database Error! ${err}`
        return callback()
    })
  }
}