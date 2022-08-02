import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Tittle = styled.h1`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;
`;

export const ImageUser = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  cursor: pointer;
`;
