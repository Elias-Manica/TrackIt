import {
  ButtonSave,
  Cancel,
  Container,
  ContainerButtons,
  Day,
  Days,
  Input,
} from "./styles";

export default function CreateHabit() {
  return (
    <Container>
      <Input placeholder="nome do hábito"></Input>
      <Days>
        <Day>D</Day>
        <Day>S</Day>
        <Day>T</Day>
        <Day>Q</Day>
        <Day>Q</Day>
        <Day>S</Day>
        <Day>S</Day>
      </Days>
      <ContainerButtons>
        <Cancel>Cancelar</Cancel>
        <ButtonSave>Salvar</ButtonSave>
      </ContainerButtons>
    </Container>
  );
}
