import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from "../features/formUserSlice";

const Form = () => {
    // react state do formulario
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();

    // metodo submit do formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        // prototipando payload
        const payload = {
            nome: name,
            telefone: phone,
            email: email
        };
        console.log(payload);

        // redux
        dispatch(addUser(payload));

        // mensagem
        alert("Sucesso!");
    }

    return (
    <>
    <form id="form-user" onSubmit={handleSubmit}>
        <div>
            <label>Nome:</label>
            <br></br>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            ></input>
        </div>

        <div>
            <label>E-mail:</label>
            <br></br>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
            ></input>
        </div>

        <div>
            <label>Telefone:</label>
            <br></br>
            <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
            ></input>
        </div>
    </form>
    <br></br>
    <button
        type="submit" 
        form="form-user"
        text="Enviar" 
    >Cadastro</button>
    </>
    );
};

export default Form;
