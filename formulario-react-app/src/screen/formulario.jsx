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

    function onChangeTres(evento) {
        alteraPessoa({
            ...pessoa,
            telefone: evento.target.value
        })
    }

    function onChangeQuatro(evento) {
        alteraPessoa({
            ...pessoa,
            cidade: evento.target.value
        })
    }

    function onChangeCinco(evento) {
        alteraPessoa({
            ...pessoa,
            email: evento.target.value
        })
    }

    function onChangeSeis(evento) {
        alteraPessoa({
            ...pessoa,
            dataNascimento: evento.target.value
        })
    }

    function onChangeSete(evento) {
        alteraPessoa({
            ...pessoa,
            endereco: evento.target.value
        })
    }

    function onChangeOito(evento) {
        alteraPessoa({
            ...pessoa,
            estado: evento.target.value
        })
    }

    function onChangeEmpregado(evento) {
        alteraPessoa({
            ...pessoa,
            empregado: evento.target.checked
        })
    }



    return <form>

        <h1> S2 Meu Formulario S2 </h1>

<<<<<<< HEAD
        <input onChange={onChangeUm} type="text" name="nome" id="1" />
        <input onChange={onChangeDois} type="number" name="idade" id="2" />
        <input onChange={onChangeTres} type="number" name="telefone" id="3" />
        <input onChange={onChangeQuatro} type="text" name="cidade" id="4" />
        <input onChange={onChangeCinco} type="email" name="email" id="5" />
        <input onChange={onChangeSeis} type="date" name="dataNascimento" id="7" />
        <input onChange={onChangeSete} type="text" name="endereco" id="8" />
        <input onChange={onChangeOito} type="text" name="estado" id="9" />
        
=======
        <input onChange={onChangeUm} type="text" name="nome" id="nome" />
        <input onChange={onChangeTres} type="tel" name="telefone" id="telefone" />
        <input onChange={onChangeQuatro} type="text" name="cidade" id="cidade" />
        <input onChange={onChangeCinco} type="email" name="email" id="email" />
        <input onChange={onChangeSeis} type="date" name="dataNascimento" id="nascimento" />
        <input onChange={onChangeSete} type="text" name="endereco" id="endereco" />
        <input onChange={onChangeOito} type="text" name="estado" id="estado" />
        <input onChange={onChangeEmpregado} type="checkbox" />


>>>>>>> 0eca8a04c98546d9540cea8d979318eb9e77eb0b

        <p>Seu Nome : {pessoa.nome}</p>
        <p>Seu Telefone : {pessoa.telefone}</p>
        <p>Sua Cidade : {pessoa.cidade}</p>
        <p>Seu Email : {pessoa.email}</p>
        <p>Sua Data de Nascimento : {pessoa.dataNascimento}</p>
        <p>Seu Endereço : {pessoa.endereco}</p>
        <p>Seu Estado : {pessoa.estado}</p>
        <p>{pessoa.nome} Esta atualmente {pessoa.empregado ? 'trabalhando' : 'procurando trampo'}</p>

    </form>
}

