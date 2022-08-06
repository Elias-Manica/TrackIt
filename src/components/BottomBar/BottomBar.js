import React from "react";
import { useContext } from "react";
import HabitDone from "../../context/habitsDonecontext";
import QtdHabits from "../../context/qtdHabitscontext";
import { useNavigate } from "react-router-dom";
import { Container, Tittle } from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

export default function BottomBar() {
  const { habitDone, setHabitDone } = useContext(HabitDone);
  const { lengthHabits, setLengthHabits } = React.useContext(QtdHabits);
  const navigate = useNavigate();
  return (
    <Container>
      <Tittle onClick={() => navigate("/habitos")}>Hábitos</Tittle>
      <div
        style={{ width: 90, height: 90, cursor: "pointer" }}
        onClick={() => navigate("/hoje")}
      >
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={(habitDone / lengthHabits.length) * 100}
          duration={1.4}
          easingFunction={easeQuadInOut}
          repeat
        >
          {(value) => {
            return (
              <CircularProgressbar
                value={value}
                text={`Hoje`}
                background
                backgroundPadding={6}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                  pathTransition: "none",
                })}
              />
            );
          }}
        </AnimatedProgressProvider>
      </div>
      <Tittle onClick={() => navigate("/historico")}>Histórico</Tittle>
    </Container>
  );
}
