import styled from "styled-components";

export const Container = styled.div`
  height: 180px;
  width: 90%;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 10px;
  margin: 5px 0;
  &::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: #dbdbdb;
  }
`;

export const Days = styled.div`
  display: flex;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
`;

export const Cancel = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #52b6ff;
  margin-right: 20px;
`;

export const ButtonSave = styled.button`
  background: #52b6ff;
  border-radius: 4.63636px;
  height: 35px;
  width: 84px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
`;
