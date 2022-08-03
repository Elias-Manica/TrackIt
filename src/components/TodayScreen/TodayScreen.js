import dayjs from "dayjs";

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
  console.log(day);
  return (
    <>
      <TopBar />
      <View>
        <DayWeek>{day}</DayWeek>
        <UnCompletedHabits>Nenhum hábito concluído ainda</UnCompletedHabits>
        <CompletedHabits>67% dos hábitos concluídos</CompletedHabits>
        <HabitContainer>
          <GoalHabit>
            <Habit>Ler 1 capítulo de livro</Habit>
            <HabitData>Sequência atual: 1 dia</HabitData>
            <HabitData>Seu recorde: 5 dias</HabitData>
          </GoalHabit>
          <ion-icon name="checkbox"></ion-icon>
        </HabitContainer>
      </View>
      <BottomBar />
    </>
  );
}
