import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/trackitServices";
import logo from "../../assets/images/logo.png";
import { View, Logo, Input, Form, Button, GoSingUp } from "./styles";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  function tryLogin(e) {
    e.preventDefault();
    console.log("clicou");
    login({ email, password }).then((res) => navigate("/habitos"));
  }

  return (
    <View>
      <Logo src={logo} alt="logo"></Logo>
      <Form onSubmit={tryLogin}>
        <Input
          placeholder="email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input
          placeholder="senha"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button>Entrar</Button>
      </Form>
      <GoSingUp>Não tem uma conta? Cadastre-se!</GoSingUp>
    </View>
  );
}
