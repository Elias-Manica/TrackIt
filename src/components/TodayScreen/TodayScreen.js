import dayjs from "dayjs";
import React from "react";
import { useContext, useEffect } from "react";
import TokenUser from "../../context/tokencontext";

import { listHabitToday } from "../../services/trackitServices";

import {
  CompletedHabits,
  DayWeek,
  GoalHabit,
  Habit,
  HabitContainer,
  HabitData,
  UnCompletedHabits,
  View,
} from "./styles";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";

export default function TodayScreen() {
  const { token, setToken } = useContext(TokenUser);
  const [habits, setHabits] = React.useState([]);
  const [habitDone, setHabitDone] = React.useState({});
  const [lengthHabits, setLengthHabits] = React.useState({});
  const [qtdDone, setqtdDone] = React.useState(0);

  function listHabitRequired(lista) {
    setHabits(lista);
    console.log(lista);
    setLengthHabits(lista);
    setHabitDone(lista);
    countHabitsDone(lista);
  }

  function countHabitsDone(listaHabits) {
    let qtd = 0;
    for (let i = 0; i < listaHabits.length; i++) {
      if (listaHabits[i].done) {
        qtd += 1;
      }
    }
    setqtdDone(qtd);
  }

  useEffect(
    () => listHabitToday(token).then((res) => listHabitRequired(res.data)),
    [token]
  );

  let updateLocale = require("dayjs/plugin/updateLocale");

  dayjs.extend(updateLocale);

  dayjs.updateLocale("en", {
    weekdays: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sabádo",
    ],
  });

  const day = dayjs().locale("pt-br").format("dddd, DD/MM");
  return (
    <>
      <TopBar />
      <View>
        <DayWeek>{day}</DayWeek>
        {qtdDone > 0 ? (
          <CompletedHabits>
            {(qtdDone / lengthHabits.length) * 100}% dos hábitos concluídos
          </CompletedHabits>
        ) : (
          <UnCompletedHabits>Nenhum hábito concluído ainda</UnCompletedHabits>
        )}
        {habits.length > 0
          ? habits.map((value) => (
              <HabitContainer check={value.done}>
                <GoalHabit>
                  <Habit>{value.name}</Habit>
                  <HabitData>
                    Sequência atual: {value.currentSequence} dia
                  </HabitData>
                  <HabitData>
                    Seu recorde: {value.highestSequence} dias
                  </HabitData>
                </GoalHabit>
                <ion-icon name="checkbox"></ion-icon>
              </HabitContainer>
            ))
          : ""}
      </View>
      <BottomBar />
    </>
  );
}
