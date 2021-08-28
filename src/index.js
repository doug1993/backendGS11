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
    const project = {id: uuid(), title, owner}
    
     projects.push(project)

    return res.json(project)
        
})

app.put('/projects/:id',(req  ,res) =>{
    const {id} = req.params
    const {title, owner} = req.body
    //encontra a posição do id no array
    const projectIndex = projects.findIndex(project => project.id == id)
    console.log('Este eh o array',projectIndex)
    if( projectIndex < 0 ){
        return res.status(400).json({error:"Project Not Found!"})
    }
        const project = {
            id,
            title,
            owner
        }
         projects[projectIndex] =  project


    return res.json(project) 
})


app.delete('/projects/:id',(req,res) =>{
    const {id} = req.params
    //encontra a posição do id no array
    const projectIndex = projects.findIndex(project => project.id == id)
    console.log('Este eh o array',projectIndex)
    if( projectIndex < 0 ){
        return res.status(400).json({error:"Project Not Found!"})
    }

    projects.splice(projectIndex, 0)

    return res.status(204).send()
})
app.listen(3333, ()=>{
    console.log('Back Run')
})