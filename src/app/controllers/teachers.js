const {age, date} = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    index(req,res){
        return res.render("teachers/index")
    },

    create(req,res){
        return res.render("teachers/create")
    },

    post(req,res){
        const keys = Object.keys(req.body) 
        for (key of keys){
            if(req.body[key] == "")
                return res.send('Please, fill all fields!')
        }
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
            req.body.avatar_url,
            req.body.name,
            date(req.body.birth).iso,
            req.body.gender,
            req.body.services,
            req.body.degree
        ]
        db.query(query, values, function(err, results) {
            if(err) return res.send("Database Error!")

            return res.redirect(`/teachers/${results.rows[0].id}`)
        })
    },

    show(req,res){
        return
    },

    edit(req,res){
        return
    },

    put(req,res){
        const keys = Object.keys(req.body) 

        for (key of keys){
            if(req.body[key] == "")
                return res.send('Please, fill all fields!')
        }
        return
    },
    
    delete(req,res){
        return
    },
}
