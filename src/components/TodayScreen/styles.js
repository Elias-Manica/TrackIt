import styled from "styled-components";

export const View = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  padding-bottom: 90px;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  img {
    align-self: center;
  }
`;

export const DayWeek = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  padding-left: 20px;
  color: #126ba5;
`;

export const UnCompletedHabits = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-left: 20px;
  margin-bottom: 20px;
  color: #bababa;
`;

export const CompletedHabits = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-left: 20px;
  margin-bottom: 20px;
  color: #8fc549;
`;

export const HabitContainer = styled.div`
  width: 90%;
  background: #ffffff;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  ion-icon {
    width: 70px;
    height: 70px;
    color: ${(props) => (props.check ? "#8FC549" : "#E7E7E7")};
  }
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  transition: 0.4s;
  &&:hover {
    transform: scale(1.05);
  }
`;

export const GoalHabit = styled.div`
  width: 70%;
`;

export const Habit = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;
`;

export const HabitData = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #666666;

  span {
    color: ${(props) => props.color};
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;
