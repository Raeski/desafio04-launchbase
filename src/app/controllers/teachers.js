const {age, date} = require('../../lib/utils')

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
            INSERT INTO teachers {
                avatar_url,
                name,
                birth,
                gender,
                services,
                degree
            } VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `
        

            return  
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
