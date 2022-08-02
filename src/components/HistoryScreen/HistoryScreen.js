import { HistoryText, Tittle, View } from "./styles";
import TopBar from "../TopBar/TopBar";
import BottomBar from "../BottomBar/BottomBar";

export default function HistoryScreen() {
  return (
    <>
      <TopBar />
      <View>
        <Tittle>Histórico</Tittle>
        <HistoryText>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </HistoryText>
      </View>
      <BottomBar />
    </>
  );
}
