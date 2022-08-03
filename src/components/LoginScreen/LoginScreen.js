import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { login } from "../../services/trackitServices";

import logo from "../../assets/images/logo.png";
import { View, Logo, Input, Form, Button, GoSingUp } from "./styles";
import UserContext from "../../context/context";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { picUser, setPicUser } = useContext(UserContext);

  const navigate = useNavigate();

  function loginValid(tokenUser, imageUser) {
    localStorage.setItem("trackit", JSON.stringify({ token: `${tokenUser}` }));
    console.log(imageUser);
    setPicUser(imageUser);
    console.log(picUser);
    setLoading(false);
    navigate("/hoje");
  }

  function loginInvalid(messageError) {
    alert(messageError);
    setLoading(false);
  }

  function tryLogin(e) {
    e.preventDefault();
    setLoading(true);
    console.log("clicou");
    login({ email, password })
      .then((res) => loginValid(res.data.token, res.data.image))
      .catch((res) => loginInvalid(res.response.data.message));
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
          required
        ></Input>
        <Input
          placeholder="senha"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></Input>
        <Button>
          {loading ? (
            <ThreeDots color="white" height={40} width={40} />
          ) : (
            "Entrar"
          )}
        </Button>
      </Form>
      <GoSingUp onClick={() => navigate("/cadastro")}>
        Não tem uma conta? Cadastre-se!
      </GoSingUp>
    </View>
  );
}
