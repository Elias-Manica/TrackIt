import styled from "styled-components";

export const DeleteScreen = styled.div`
  width: 90%;
  background: white;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  transition: 0.4s;
  &&:hover {
    transform: scale(1.05);
  }
`;

export const Cancel = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

export const ButtonCancel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 20px;
  background: #52b6ff;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-top: -20px;
  margin-bottom: 10px;
`;

export const ButtonNo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 20px;
  background: #52b6ff;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 10px;
`;
