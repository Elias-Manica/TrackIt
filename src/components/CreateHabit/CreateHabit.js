import React from "react";
import { useContext } from "react";
import ListDays from "../../context/listDayscontext";
import TokenUser from "../../context/tokencontext";
import { ThreeDots } from "react-loader-spinner";

import {
  ButtonSave,
  Cancel,
  Container,
  ContainerButtons,
  Days,
  Input,
} from "./styles";

import DayLayout from "../Day/DayLayout";
import { createHabit } from "../../services/trackitServices";

export default function CreateHabit({ setCreatingHabit, setListHabits }) {
  const [nameHabit, setNameHabit] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { listDays, setListDays } = useContext(ListDays);
  const { token, setToken } = useContext(TokenUser);

  function creatingHabit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(token);
    createHabit(nameHabit, listDays, token)
      .then((res) => createHabitValid(res))
      .catch((res) => console.log(res, "erro"));
  }

  function createHabitValid(res) {
    console.log(res, "foi");
    setListDays([]);
    setLoading(false);
    setCreatingHabit(false);
  }

  function cancelCreateHabit() {
    setListDays([]);
    setCreatingHabit(false);
  }

  return (
    <Container>
      <form onSubmit={creatingHabit}>
        <Input
          placeholder="nome do hábito"
          onChange={(e) => setNameHabit(e.target.value)}
          value={nameHabit}
          required
          disabled={loading ? true : false}
          color={loading ? "#F2F2F2" : "#FFFFF"}
        ></Input>
        <Days opacity={loading ? "0.7" : "1"} event={loading ? "none" : ""}>
          <DayLayout index={0}>D</DayLayout>
          <DayLayout index={1}>S</DayLayout>
          <DayLayout index={2}>T</DayLayout>
          <DayLayout index={3}>Q</DayLayout>
          <DayLayout index={4}>Q</DayLayout>
          <DayLayout index={5}>S</DayLayout>
          <DayLayout index={6}>S</DayLayout>
        </Days>
        <ContainerButtons>
          <Cancel onClick={() => cancelCreateHabit()}>Cancelar</Cancel>
          <ButtonSave
            disabled={loading ? true : false}
            color={loading ? "0.7" : "1"}
          >
            {loading ? (
              <ThreeDots color="white" height={40} width={40} />
            ) : (
              "Salvar"
            )}
          </ButtonSave>
        </ContainerButtons>
      </form>
    </Container>
  );
}
