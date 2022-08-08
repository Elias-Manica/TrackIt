import React from "react";
import { singUp } from "../../services/trackitServices";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Button, Form, GoSingUp, Input, Logo, View } from "./styles";
import imgLogo from "../../assets/images/logo.png";

export default function SingUpScreen() {
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [name, setName] = React.useState([]);
  const [image, setImage] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  function singUpCorrect(res) {
    alert("Parabéns! seu usuário foi cadastrado corretamente");
    setLoading(false);
    navigate("/");
  }

  function singUpInvalid(messageError) {
    alert(messageError);
    setLoading(false);
  }

  function singUpData(e) {
    e.preventDefault();
    setLoading(true);
    singUp({ email, password, name, image })
      .then((res) => singUpCorrect(res))
      .catch((res) => singUpInvalid(res.response.data.message));
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
          disabled={loading ? true : false}
          color={loading ? "#F2F2F2" : "#FFFFF"}
        ></Input>
        <Input
          placeholder="senha"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading ? true : false}
          color={loading ? "#F2F2F2" : "#FFFFF"}
        ></Input>
        <Input
          placeholder="nome"
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading ? true : false}
          color={loading ? "#F2F2F2" : "#FFFFF"}
        ></Input>
        <Input
          placeholder="foto"
          type={"text"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          disabled={loading ? true : false}
          color={loading ? "#F2F2F2" : "#FFFFF"}
        ></Input>
        <Button disabled={loading ? true : false} color={loading ? "0.7" : "1"}>
          {loading ? (
            <ThreeDots color="white" height={40} width={40} />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </Form>
      <GoSingUp onClick={() => navigate("/")}>
        Já tem uma conta? Faça login!
      </GoSingUp>
    </View>
  );
}
