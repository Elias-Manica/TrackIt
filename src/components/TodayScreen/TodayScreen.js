import dayjs from "dayjs";
import React from "react";
import { useContext, useEffect } from "react";
import TokenUser from "../../context/tokencontext";
import { ThreeDots } from "react-loader-spinner";

import {
  listHabitToday,
  checkHabit,
  uncheckHabit,
} from "../../services/trackitServices";

import {
  CompletedHabits,
  DayWeek,
  GoalHabit,
  Habit,
  HabitContainer,
  HabitData,
  UnCompletedHabits,
  View,
  Icon,
} from "./styles";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";

export default function TodayScreen() {
  const { token, setToken } = useContext(TokenUser);
  const [habits, setHabits] = React.useState([]);
  const [lengthHabits, setLengthHabits] = React.useState({});
  const [qtdDone, setqtdDone] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  function listHabitRequired(lista) {
    setHabits(lista);
    console.log(lista);
    setLengthHabits(lista);
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

  function reloadPage() {}

  function checkHab(id, check) {
    setLoading(true);
    if (check) {
      uncheckHabit(id, token).then(() => setLoading(false));
    } else {
      checkHabit(id, token).then(() => setLoading(false));
    }
  }

  useEffect(
    () => listHabitToday(token).then((res) => listHabitRequired(res.data)),
    [loading]
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
            {((qtdDone / lengthHabits.length) * 100).toFixed(0)}% dos hábitos
            concluídos
          </CompletedHabits>
        ) : (
          <UnCompletedHabits>Nenhum hábito concluído ainda</UnCompletedHabits>
        )}
        {habits.length > 0
          ? habits.map((value) => (
              <HabitContainer check={value.done} key={value.id}>
                <GoalHabit>
                  <Habit>{value.name}</Habit>
                  <HabitData>
                    Sequência atual: {value.currentSequence} dia
                  </HabitData>
                  <HabitData>
                    Seu recorde: {value.highestSequence} dias
                  </HabitData>
                </GoalHabit>
                <Icon onClick={() => checkHab(value.id, value.done)}>
                  {loading ? (
                    <ThreeDots color="green" height={40} width={40} />
                  ) : (
                    <ion-icon name="checkbox"></ion-icon>
                  )}
                </Icon>
              </HabitContainer>
            ))
          : ""}
      </View>
      <BottomBar />
    </>
  );
}
