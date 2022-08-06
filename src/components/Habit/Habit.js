import React from "react";
import { Container, Days, Day, NameHabit, Icon } from "./styles";
import DeleteHabitScreen from "../DeleteHabitScreen/DeleteHabitScreen";

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

//() => deleteHabit(id, token).then(setReload(!reload))

export default function Habit({ tittle, days, id, token, reload, setReload }) {
  const daysOrder = days.sort();
  const weekBool = [false, false, false, false, false, false, false];
  const [deleteHab, setDeleteHab] = React.useState(false);

  daysOrder.map((value) => (weekBool[value] = true));

  return (
    <>
      {deleteHab ? (
        <DeleteHabitScreen
          tittle={tittle}
          id={id}
          token={token}
          reload={reload}
          setReload={setReload}
          setDeleteHab={setDeleteHab}
        />
      ) : (
        ""
      )}
      <Container>
        <NameHabit>
          <h1>{tittle}</h1>
          <Icon onClick={() => setDeleteHab(!deleteHab)}>
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
    </>
  );
}
