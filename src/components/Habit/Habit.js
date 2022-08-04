import { Container, Days, Day, NameHabit } from "./styles";

function letterWeek(dayNumber) {
  if (dayNumber === 0) {
    return "D";
  }
  if (dayNumber === 1) {
    return "S";
  }
  if (dayNumber === 2) {
    return "T";
  }
  if (dayNumber === 3) {
    return "Q";
  }
  if (dayNumber === 4) {
    return "Q";
  }
  if (dayNumber === 5) {
    return "S";
  }
  if (dayNumber === 6) {
    return "S";
  }
}

function verifyDay(day, list) {
  if (list.includes(day)) {
    return true;
  }
}

export default function Habit({ tittle, days }) {
  const daysWeek = [0, 1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <NameHabit>
        <h1>{tittle}</h1>
        <ion-icon name="trash-outline"></ion-icon>
      </NameHabit>
      <Days>
        {days.map((day, index) => (
          <Day key={index} color="grey">
            {letterWeek(day)}
          </Day>
        ))}
      </Days>
    </Container>
  );
}
