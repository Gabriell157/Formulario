import React, { useState } from 'react'

export default Formulario

function Formulario() {
    const [pessoa, alteraPessoa] = useState({})

    function onChangeUm(evento) {
        alteraPessoa({
            ...pessoa,
            nome: evento.target.value
        })
    }

    function onChangeDois(evento) {
        alteraPessoa({
            ...pessoa,
            telefone: evento.target.value
        })
    }

    function onChangeTres(evento) {
        alteraPessoa({
            ...pessoa,
            cidade: evento.target.value
        })
    }

    function onChangeQuatro(evento) {
        alteraPessoa({
            ...pessoa,
            email: evento.target.value
        })
    }

    function onChangeCinco(evento) {
        alteraPessoa({
            ...pessoa,
            dataNascimento: evento.target.value
        })
    }

    function onChangeSeis(evento) {
        alteraPessoa({
            ...pessoa,
            endereco: evento.target.value
        })
    }

    function onChangeSete(evento) {
        alteraPessoa({
            ...pessoa,
            estado: evento.target.value
        })
    }

    return <form>

        <h1> S2 Meu Formulario S2 </h1>

        <input onChange={onChangeUm} type="text" name="nome" id="1" />
        <input onChange={onChangeDois} type="number" name="telefone" id="3" />
        <input onChange={onChangeTres} type="text" name="cidade" id="4" />
        <input onChange={onChangeQuatro} type="email" name="email" id="5" />
        <input onChange={onChangeCinco} type="date" name="dataNascimento" id="7" />
        <input onChange={onChangeSeis} type="text" name="endereco" id="8" />
        <input onChange={onChangeSete} type="text" name="estado" id="9" />
        

        <p>Seu Nome : {pessoa.nome}</p>
        <p>Seu Telefone : {pessoa.telefone}</p>
        <p>Sua Cidade : {pessoa.cidade}</p>
        <p>Seu Email : {pessoa.email}</p>
        <p>Sua Data de Nascimento : {pessoa.dataNascimento}</p>
        <p>Seu Endereço : {pessoa.endereco}</p>
        <p>Seu Estado : {pessoa.estado}</p>
        

    </form>
}

