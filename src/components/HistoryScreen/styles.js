import styled from "styled-components";

export const View = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  padding-bottom: 90px;
  padding-top: 90px;
`;

export const Tittle = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  margin-left: 20px;
  color: #126ba5;
  margin-bottom: 20px;
`;

export const History = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  .rdp {
    margin: 0;
  }

  .rdp-button[aria-disabled="true"] {
    opacity: 1;
    background-color: green;
  }
`;
