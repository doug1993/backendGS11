import React, {useState} from 'react'
import Header from './components/Header'

import './App.css'
import backgroundImage from './assets/background.jpeg'
function App(){
    const [projects, setProjects] = useState(['App','WebApp'])
    //useState retorna um array com 2posicoes
    // 1. Variavel com seu valor inicial
    // 2. uma funcao para alterar o valor 
//Imutabilidade: conceito de n'ao poder alterar uma variavel , entao temos que recriar ela com a nova informacao atravez do ...projects
    function HandleAddProject(){
        setProjects([...projects,`Novo Projeto ${Date.now()}`])
    
    
    }    

    return (
            <>
                 <Header title = "Projects"/>
                    <img src={backgroundImage} />

                 <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>
                <button type="button" onClick={HandleAddProject} >Project</button>    
            </>
    )
}
export default App