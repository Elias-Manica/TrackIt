import { useNavigate } from "react-router-dom";
import { Buttom, Container, Tittle } from "./styles";

export default function BottomBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Tittle onClick={() => navigate("/habitos")}>Hábitos</Tittle>
      <Buttom onClick={() => navigate("/hoje")}>Hoje</Buttom>
      <Tittle onClick={() => navigate("/historico")}>Histórico</Tittle>
    </Container>
  );
}
