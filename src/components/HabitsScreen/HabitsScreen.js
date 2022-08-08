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
  const { token } = useContext(TokenUser);
  const [listHabits, setListHabits] = React.useState([]);
  const [reload, setReload] = React.useState(true);
  const [creatingHabit, setCreatingHabit] = React.useState(false);

  function habitValid(list) {
    setListHabits(list);
  }

  useEffect(
    () => listHabit(token).then((res) => habitValid(res.data)),
    [creatingHabit, reload, token]
  );

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
          <CreateHabit
            setCreatingHabit={setCreatingHabit}
            setListHabits={setListHabits}
          />
        ) : (
          ""
        )}
        {listHabits.length > 0 ? (
          listHabits.map((value) => (
            <Habit
              key={value.id}
              tittle={value.name}
              days={value.days}
              id={value.id}
              token={token}
              reload={reload}
              setReload={setReload}
            />
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
