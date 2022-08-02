import logo from "../../assets/images/logo.png";
import { View, Logo, Input, Form, Button, GoSingUp } from "./styles";

export default function LoginScreen() {
  return (
    <View>
      <Logo src={logo} alt="logo"></Logo>
      <Form>
        <Input placeholder="email" type={"email"}></Input>
        <Input placeholder="senha" type={"password"}></Input>
        <Button>Entrar</Button>
      </Form>
      <GoSingUp>Não tem uma conta? Cadastre-se!</GoSingUp>
    </View>
  );
}
