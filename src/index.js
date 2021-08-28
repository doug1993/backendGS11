const { request } = require('express')
const express = require('express')
const {uuid} = require('uuidv4')

const app= express()

app.use(express.json())


/* 
Query pararms:Filtros e paginação
exemplo const{title,owner} = request.query
Routes Pararms :atualizando ou deletendo um elemento i
request body pega um objeto por completo em JSON

const 

*/

const projects = []


app.get('/projects',(req,res) =>{

    //const{title,owner} = req.query
    
    
    return res.json(projects)
    
})

app.post('/projects',(req,res) =>{
    //requer o corpo do objeto
    const {title,owner} =req.body
    //cria um projeto com titulo com criador, um id único
    const project = {id:uuid(),title,owner}
    
     projects.push(project)

    return res.json(project)
        
})

app.put('/projects/:id',(req  ,res) =>{
    const {id} = req.params
    const projectIndex = projects.findIndex(project=>project.id==id)
    if(projectIndex<0){
        return res.status(400).json({error:"Project Not Found!"})
    }
    
    //pega o param e seu velue como um json

    
//tras apenas o value não identifica o param
    console.log(id)
    return res.json(
        ['project4','project2','project3']
        )
        
})
app.delete('/projects/:id',(req,res) =>{
    return res.json(
        ['project2','project3']
        )
        
})
app.listen(3333, ()=>{
    console.log('Back Run')
})