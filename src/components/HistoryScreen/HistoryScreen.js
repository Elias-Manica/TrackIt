import { useContext } from "react";
import { CalendarContainer, History, Tittle, View } from "./styles";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";
import { getHistory } from "../../services/trackitServices";
import TokenUser from "../../context/tokencontext";
import React, { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import ptBr from "date-fns/locale/pt-BR";

let bookedDays = [];
let newBookedDays = [];
let daysHabitsPass = [];
const bookedStyle = { background: "red" };

export default function HistoryScreen() {
  const [listdays, setListdays] = useState([]);
  const [habits, setHabits] = useState([]);
  const { token } = useContext(TokenUser);

  function valid(historico) {
    bookedDays = [];
    newBookedDays = [];
    daysHabitsPass = [];
    historico.map((value) =>
      value.habits.map((feito) =>
        feito.done &&
        !daysHabitsPass.includes(
          new Date(
            `${value.day[6]}${value.day[7]}${value.day[8]}${value.day[9]}, ${value.day[4]}, ${value.day[1]} `
          )
        )
          ? newBookedDays.push(
              new Date(
                `${value.day[6]}${value.day[7]}${value.day[8]}${value.day[9]}, ${value.day[4]}, ${value.day[1]} `
              )
            )
          : daysHabitsPass.push(
              new Date(
                `${value.day[6]}${value.day[7]}${value.day[8]}${value.day[9]}, ${value.day[4]}, ${value.day[1]} `
              )
            )
      )
    );
    setListdays(Object.assign([], bookedDays, daysHabitsPass));
    setHabits(Object.assign([], bookedDays, newBookedDays));
  }

  useEffect(() => getHistory(token).then((res) => valid(res.data)), [token]);

  return (
    <>
      <TopBar />
      <View>
        <Tittle>Histórico</Tittle>
        <History>
          <CalendarContainer>
            <DayPicker
              mode="single"
              modifiers={{ booked: listdays }}
              modifiersStyles={{ booked: bookedStyle }}
              disabled={habits}
              locale={ptBr}
            />
          </CalendarContainer>
        </History>
      </View>
      <BottomBar />
    </>
  );
}
