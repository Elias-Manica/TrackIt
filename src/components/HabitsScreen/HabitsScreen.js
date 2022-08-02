import BottomBar from "../BottomBar/BottomBar";
import TopBar from "../TopBar/TopBar";
import { Tittle, View } from "./styles";

export default function HabitsScreen() {
  return (
    <>
      <TopBar />
      <View>
        <Tittle>screen habits</Tittle>
      </View>
      <BottomBar />
    </>
  );
}
