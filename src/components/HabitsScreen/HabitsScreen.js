import BottomBar from "../BottomBar/BottomBar";
import TopBar from "../TopBar/TopBar";
import CreateHabit from "../CreateHabit/CreateHabit";
import { ButtonCreate, Habit, Tittle, View } from "./styles";

export default function HabitsScreen() {
  return (
    <>
      <TopBar />
      <View>
        <Habit>
          <Tittle>Meus hábitos</Tittle>
          <ButtonCreate>+</ButtonCreate>
        </Habit>
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
