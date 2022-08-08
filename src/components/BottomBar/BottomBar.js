import React from "react";
import { useContext } from "react";
import HabitDone from "../../context/habitsDonecontext";
import QtdHabits from "../../context/qtdHabitscontext";
import { useNavigate } from "react-router-dom";
import { Container, Tittle } from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function BottomBar() {
  const { habitDone } = useContext(HabitDone);
  const { lengthHabits } = React.useContext(QtdHabits);
  const navigate = useNavigate();
  return (
    <Container>
      <Tittle onClick={() => navigate("/habitos")}>Hábitos</Tittle>
      <div
        style={{ width: 90, height: 90, cursor: "pointer" }}
        onClick={() => navigate("/hoje")}
      >
        <CircularProgressbar
          value={habitDone === 0 ? 0 : (habitDone / lengthHabits.length) * 100}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            pathTransition: "none",
          })}
        />
      </div>
      <Tittle onClick={() => navigate("/historico")}>Histórico</Tittle>
    </Container>
  );
}
