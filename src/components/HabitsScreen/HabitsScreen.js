import BottomBar from "../BottomBar/BottomBar";
import TopBar from "../TopBar/TopBar";
import CreateHabit from "../CreateHabit/CreateHabit";
import { ButtonCreate, HabitLayout, Tittle, View } from "./styles";
import Habit from "../Habit/Habit";

export default function HabitsScreen() {
  return (
    <>
      <TopBar />
      <View>
        <HabitLayout>
          <Tittle>Meus hábitos</Tittle>
          <ButtonCreate>+</ButtonCreate>
        </HabitLayout>
        <Habit />
        <CreateHabit />
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </View>
      <BottomBar />
    </>
  );
}
