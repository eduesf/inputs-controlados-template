import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [dadosUsuario, setDadosUsuario] = useState({});

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const guardarDados = () => {
    const formulario = {
      nome: nome,
      idade: idade,
      email: email,
    };

    setDadosUsuario(formulario);

    console.log(formulario);

    setNome("");
    setIdade("");
    setEmail("");
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={onChangeNome} />
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={onChangeIdade} />
        </label>
        <label>
          E-mail:
          <Input value={email} onChange={onChangeEmail} />
        </label>
        <button onClick={guardarDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
