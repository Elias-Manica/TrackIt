import styled from "styled-components";

export const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 180px;
  height: 180px;
`;

export const Form = styled.form`
  width: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  &::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #52b6ff;
  border-radius: 4.63636px;
  height: 45px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const GoSingUp = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  cursor: pointer;
  color: #52b6ff;
`;
