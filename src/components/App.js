import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../assets/styles/GlobalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";
import SingUpScreen from "./SingUpScreen/SingUpScreen";
import HabitsScreen from "./HabitsScreen/HabitsScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<SingUpScreen />} />
          <Route path="/habitos" element={<HabitsScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
