const { age, date } = require('../../lib/utils')

module.exports = {

    index(req,res) {
    return res.render("instructors/index",)},
    create(req,res) {
        return res.render('instructors/create')
    },
    post(req,res) {

    const keys = Object.keys(req.body)

    for ( key of keys) {
        
       if (req.body[key] == "") 
        return res.send('Please, fill all fields')
    }

    let {avatar_url, birth, name, services, gender} = req.body

    return
   
    },
    show(req,res) {const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor){
        return id == instructor.id
    })
    if(!foundInstructor)  return res.send("Instructor not found!") 

   
   
    
    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
    }

    return res.render("instructors/show", {instructor})},
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