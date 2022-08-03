import React from "react";
import { useContext } from "react";
import UserContext from "../../context/imagecontext";

import { Container, ImageUser, Tittle } from "./styles";

export default function TopBar() {
  const { picUser, setPicUser } = useContext(UserContext);
  console.log(picUser);
  return (
    <Container>
      <Tittle>TrackIt</Tittle>
      <ImageUser src={picUser} />
    </Container>
  );
}
