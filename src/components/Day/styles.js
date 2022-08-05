import styled from "styled-components";

export const Day = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.color};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  cursor: pointer;
  color: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
