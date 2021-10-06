import React, {useState, useEffect } from 'react'
import Header from './components/Header'

import './App.css'
import api from './services/api'

import backgroundImage from './assets/background.jpeg'
function App(){
    const [projects, setProjects] = useState([])
    //useState retorna um array com 2posicoes
    // 1. Variavel com seu valor inicial
    // 2. uma funcao para alterar o valor 
//Imutabilidade: conceito de n'ao poder alterar uma variavel , entao temos que recriar ela com a nova informacao atravez do ...projects

        useEffect(() => {
            api.get('projects').then(response =>{
                setProjects(response.data)
            })
        }, []);


    function HandleAddProject(){
        setProjects([...projects,`Novo Projeto ${Date.now()}`])
    
    
    }    
    //     <img src={backgroundImage} /> forma de mostra uma imagem 

    return (
            <>
                 <Header title = "Projects"/>

               

                 <ul>
                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>
                <button type="button" onClick={HandleAddProject} >Project</button>    
            </>
    )
}
export default App