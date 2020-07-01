const fs = require('fs')
//CREATE
    exports.post = function(req,res){
        //return res.send('recebido') //Recebendo os dados do create.njk
    
        const keys = Object.keys(req.body)
        // req.body.key == ""
        for (key of keys){
            if(req.body[key] == "")
                return res.send('Please, fill all fields!')
        }
        fs.writeFile("data.json", JSON.stringify(req.body), function (err) {
            if(err) return res.send("Write file error!")
            return res.redirect("/teachers")
        })

        return res.send(keys)
    }





//UPDATE

//DELETE