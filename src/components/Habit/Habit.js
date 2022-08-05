import { deleteHabit } from "../../services/trackitServices";
import { Container, Days, Day, NameHabit, Icon } from "./styles";

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

export default function Habit({ tittle, days, id, token, reload, setReload }) {
  const daysOrder = days.sort();
  const weekBool = [false, false, false, false, false, false, false];

  daysOrder.map((value) => (weekBool[value] = true));

  return (
    <Container>
      <NameHabit>
        <h1>{tittle}</h1>
        <Icon onClick={() => deleteHabit(id, token).then(setReload(!reload))}>
          <ion-icon name="trash-outline"></ion-icon>
        </Icon>
      </NameHabit>
      <Days>
        {weekBool.map((bool, index) =>
          bool ? (
            <Day key={index} color="grey">
              {letterWeek(index)}
            </Day>
          ) : (
            <Day key={index} color="white">
              {letterWeek(index)}
            </Day>
          )
        )}
      </Days>
    </Container>
  );
}
