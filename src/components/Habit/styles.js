import styled from "styled-components";

export const NameHabit = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 90%;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  transition: 0.4s;
  &&:hover {
    transform: scale(1.05);
  }
`;

export const Days = styled.div`
  display: flex;
  margin-top: 5px;
`;
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
  color: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const Icon = styled.div`
  color: "#666666";
  cursor: pointer;
`;
