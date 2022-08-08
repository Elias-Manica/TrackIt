import React from "react";
import { useContext } from "react";
import ListDays from "../../context/listDayscontext";
import { Day } from "./styles";

export default function DayLayout({ children, index }) {
  const [colorDay, setColorDay] = React.useState("white");
  const { listDays, setListDays } = useContext(ListDays);

  function pushIndexDay(i) {
    if (listDays.includes(i)) {
      let indexId = listDays.indexOf(i);
      listDays.splice(indexId, 1);
      setColorDay("white");
    } else {
      setListDays([...listDays, i]);
      setColorDay("grey");
    }
  }

  return (
    <Day onClick={() => pushIndexDay(index)} color={colorDay}>
      {children}
    </Day>
  );
}
