import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, ContainerInputs, Input, InputLabel, Container } from "./styles"
import api from "../services/api";
import DefaultButton from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import Titles from "../../components/Title";

function Home() {

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    });
    navigate("/lista-de-usuarios");
  }

  return (
    <Container>
      
      <TopBackground />

      <Form action="">
        <Titles>Cadastrar Usuários</Titles>
        <ContainerInputs>
          <div>
            <InputLabel htmlFor="userName">Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} autoFocus/>
          </div>
          <div>
            <InputLabel htmlFor="userAge">Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge}/>
          </div>
        </ContainerInputs>
        <div style={{width: "100%"}}>
            <InputLabel htmlFor="userEmail">E-mail<span> *</span></InputLabel>
            <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail}/>
          </div>
        <DefaultButton type="button" onClick={registerNewUser} theme="primary">Cadastar Usuário</DefaultButton>
      </Form>
      <DefaultButton type="button" onClick={() => navigate("/lista-de-usuarios")}>Ver Lista de Usuários</DefaultButton>
    </Container>
  )
}

export default Home;