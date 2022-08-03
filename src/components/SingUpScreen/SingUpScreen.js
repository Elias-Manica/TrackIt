import React from "react";
import { singUp } from "../../services/trackitServices";
import { useNavigate } from "react-router-dom";

import { Button, Form, GoSingUp, Input, Logo, View } from "./styles";
import imgLogo from "../../assets/images/logo.png";

export default function SingUpScreen() {
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [image, setImage] = React.useState([]);

  const navigate = useNavigate();

  function singUpData(e) {
    e.preventDefault();
    singUp({ email, password, name, image })
      .catch((res) => alert(res.response.data.message))
      .then((res) => console.log(res.data));
  }

  return (
    <View>
      <Logo src={imgLogo} alt="logo" />
      <Form onSubmit={singUpData}>
        <Input
          placeholder="email"
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></Input>
        <Input
          placeholder="senha"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></Input>
        <Input
          placeholder="nome"
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></Input>
        <Input
          placeholder="foto"
          type={"text"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        ></Input>
        <Button>Cadastrar</Button>
      </Form>
      <GoSingUp onClick={() => navigate("/")}>
        Já tem uma conta? Faça login!
      </GoSingUp>
    </View>
  );
}
