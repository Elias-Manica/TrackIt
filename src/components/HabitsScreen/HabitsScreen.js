import React from "react";
import BottomBar from "../BottomBar/BottomBar";
import TopBar from "../TopBar/TopBar";
import CreateHabit from "../CreateHabit/CreateHabit";
import { useContext, useEffect } from "react";
import TokenUser from "../../context/tokencontext";

import { listHabit } from "../../services/trackitServices";

import { ButtonCreate, HabitLayout, Tittle, View } from "./styles";
import Habit from "../Habit/Habit";

export default function HabitsScreen() {
  const { token, setToken } = useContext(TokenUser);
  const [listHabits, setListHabits] = React.useState([]);
  const [creatingHabit, setCreatingHabit] = React.useState(false);

  useEffect(() => listHabit(token).then((res) => setListHabits(res.data)), []);

  console.log(listHabits);

  return (
    <>
      <TopBar />
      <View>
        <HabitLayout>
          <Tittle>Meus hábitos</Tittle>
          <ButtonCreate onClick={() => setCreatingHabit(!creatingHabit)}>
            +
          </ButtonCreate>
        </HabitLayout>
        {creatingHabit ? (
          <CreateHabit setCreatingHabit={setCreatingHabit} />
        ) : (
          ""
        )}
        {listHabits.length > 0 ? (
          listHabits.map((value) => (
            <Habit key={value.id} tittle={value.name} days={value.days} />
          ))
        ) : (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        )}
      </View>
      <BottomBar />
    </>
  );
}
