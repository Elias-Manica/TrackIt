import React from "react";
import { useContext } from "react";
import ListDays from "../../context/listDayscontext";
import TokenUser from "../../context/tokencontext";

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

export default function CreateHabit() {
  const [nameHabit, setNameHabit] = React.useState([]);
  const { listDays, setListDays } = useContext(ListDays);
  const { token, setToken } = useContext(TokenUser);

  function creatingHabit(e) {
    e.preventDefault();
    console.log(listDays);
    console.log(token);
    createHabit(nameHabit, listDays, token).then((res) => console.log(res));
  }

  return (
    <Container>
      <form onSubmit={creatingHabit}>
        <Input
          placeholder="nome do hábito"
          onChange={(e) => setNameHabit(e.target.value)}
          value={nameHabit}
          required
        ></Input>
        <Days>
          <DayLayout index={0}>D</DayLayout>
          <DayLayout index={1}>S</DayLayout>
          <DayLayout index={2}>T</DayLayout>
          <DayLayout index={3}>Q</DayLayout>
          <DayLayout index={4}>Q</DayLayout>
          <DayLayout index={5}>S</DayLayout>
          <DayLayout index={6}>S</DayLayout>
        </Days>
        <ContainerButtons>
          <Cancel>Cancelar</Cancel>
          <ButtonSave>Salvar</ButtonSave>
        </ContainerButtons>
      </form>
    </Container>
  );
}
