import React from "react";
import { useSelector } from "react-redux";

// Components
import Form from "../components/Form";

const PageCadastro = () => {
  const user = useSelector((state) => state.formUser.value);

  return (
    <>
    <main>
        <h1>Cadastro</h1>
        <h3>Formulário do usuário</h3>
        <Form />
    </main>
    
    {user.map((element) => 
      <div>
        <hr></hr>
        <h5>Usuário</h5>
        <p>Nome: {element.nome}</p>
        <p>E-mail: {element.email}</p>
        <p>Telefone: {element.telefone}</p>
        <hr></hr>
      </div>
    )}
    </>
  );
};

export default PageCadastro;
