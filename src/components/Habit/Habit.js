import { Container, Days, Day, NameHabit } from "./styles";

export default function Habit() {
  return (
    <Container>
      <NameHabit>
        <h1>Ler 1 capítulo de livro</h1>
        <ion-icon name="trash-outline"></ion-icon>
      </NameHabit>
      <Days>
        <Day>D</Day>
        <Day>S</Day>
        <Day>T</Day>
        <Day>Q</Day>
        <Day>Q</Day>
        <Day>S</Day>
        <Day>S</Day>
      </Days>
    </Container>
  );
}
