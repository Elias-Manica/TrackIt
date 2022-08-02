import { Button, Form, GoSingUp, Input, Logo, View } from "./styles";
import imgLogo from "../../assets/images/logo.png";

export default function SingUpScreen() {
  return (
    <View>
      <Logo src={imgLogo} alt="logo" />
      <Form>
        <Input placeholder="email" type={"email"}></Input>
        <Input placeholder="senha" type={"password"}></Input>
        <Input placeholder="nome" type={"text"}></Input>
        <Input placeholder="foto" type={"text"}></Input>
        <Button>Cadastrar</Button>
      </Form>
      <GoSingUp>Já tem uma conta? Faça login!</GoSingUp>
    </View>
  );
}
