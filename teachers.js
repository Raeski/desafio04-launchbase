const fs = require('fs')
const data = require('./data.json')
//CREATE
    exports.post = function(req,res){
        //return res.send('recebido') //Recebendo os dados do create.njk
    
        const keys = Object.keys(req.body)
        // req.body.key == ""
        for (key of keys){
            if(req.body[key] == "")
                return res.send('Please, fill all fields!')
        }

        data.teachers.push(req.body)

        fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
            if(err) return res.send("Write file error!")
                    
            return res.redirect("/teachers")
        })

        //return res.send(keys)
    }





//UPDATE

//DELETE