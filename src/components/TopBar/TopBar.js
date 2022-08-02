import { Container, ImageUser, Tittle } from "./styles";
import imgUser from "../../assets/images/ícone-do-usuário-do-vetor-7337510.jpg";

export default function TopBar() {
  return (
    <Container>
      <Tittle>TrackIt</Tittle>
      <ImageUser src={imgUser} />
    </Container>
  );
}
