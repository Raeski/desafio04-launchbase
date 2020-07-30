const { age, date } = require('../../lib/utils')

module.exports = {

    index(req,res) {
    return res.render("members/index")},
    create(req,res) {
        return res.render('members/create')
    },
    post(req,res) {

    const keys = Object.keys(req.body)

    for ( key of keys) {
        
       if (req.body[key] == "") 
        return res.send('Please, fill all fields')
    }

    return
   
    },
    show(req,res) {const { id } = req.params

    const foundInstructor = data.members.find(function (member){
        return id == member.id
    })
    if(!foundInstructor)  return res.send("Instructor not found!") 

   
   
    
    const member = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
    }

    return res.render("members/show", {member})},
    edit(req,res) {
        return
    },
    put(req,res) {
        return
    },
    delete(req,res) {
        return
    },
}