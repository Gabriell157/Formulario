import React, { useState } from 'react'

export default Projetos


function Projetos () {
    const [pessoa, alteraPessoa]= useState ({})  

    function onChangeSupremo(evento) {
        const copia = { ...pessoa }
        copia[evento.target.name] = evento.target.value
        alteraPessoa(copia)
          
    }

    function pegando () {
        const lendo = JSON.parse (Projetos) 
        localStorage.getItem ('Projetos', lendo) 
    }

    function salvarPessoa () {
        const salvando =  JSON.stringify (Projetos) 
        localStorage.setItem ('Projetos', salvando)  
         
    }


    return <form>
        <h1>Ola</h1>

        <input onChange={onChangeSupremo} type="text" name="projeto" id="a" />
        <input onChange={onChangeSupremo} type="text" name="tecnologia" id="b" />
        <input onChange={onChangeSupremo} type="text" name="descricao" id="c" />

        <p>Projeto : {pessoa.projeto} </p>
        <p>Tecnologia : {pessoa.tecnologia} </p>
        <p>Descrição : {pessoa.descricao} </p>

        <button type = "button" onClick={salvarPessoa}>Salvar</button>

        </form>
}

