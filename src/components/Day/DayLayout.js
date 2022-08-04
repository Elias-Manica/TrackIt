import React from "react";
import { useContext } from "react";
import ListDays from "../../context/listDayscontext";
import { Day } from "./styles";

export default function DayLayout({ children, index }) {
  const [colorDay, setColorDay] = React.useState(false);
  const { listDays, setListDays } = useContext(ListDays);

  function pushIndexDay(i) {
    if (listDays.includes(i)) {
      let indexId = listDays.indexOf(i);
      listDays.splice(indexId, 1);
      setColorDay(!colorDay);
    } else {
      setListDays([...listDays, i]);
      setColorDay(!colorDay);
    }
  }

  console.log(listDays);

  return (
    <Day onClick={() => pushIndexDay(index)} color={colorDay}>
      {children}
    </Day>
  );
}
