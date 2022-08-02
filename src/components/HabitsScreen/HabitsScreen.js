import BottomBar from "../BottomBar/BottomBar";
import TopBar from "../TopBar/TopBar";
import { ButtonCreate, CreatHabit, Tittle, View } from "./styles";

export default function HabitsScreen() {
  return (
    <>
      <TopBar />
      <View>
        <CreatHabit>
          <Tittle>Meus hábitos</Tittle>
          <ButtonCreate>+</ButtonCreate>
        </CreatHabit>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </View>
      <BottomBar />
    </>
  );
}
