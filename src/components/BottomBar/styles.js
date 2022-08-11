import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    transition: transform 250ms;
    &&:hover {
      transform: translateY(-3px);
    }
  }
`;

export const Tittle = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
  color: #52b6ff;
  transition: transform 250ms;
  &&:hover {
    transform: translateY(-3px);
  }
`;

export const Buttom = styled.div`
  cursor: pointer;
`;
