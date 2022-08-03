import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivatePage from "../services/PrivatePage";

import { GlobalStyle } from "../assets/styles/GlobalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";
import SingUpScreen from "./SingUpScreen/SingUpScreen";
import HabitsScreen from "./HabitsScreen/HabitsScreen";
import TodayScreen from "./TodayScreen/TodayScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<SingUpScreen />} />
          <Route
            path="/habitos"
            element={
              <PrivatePage>
                <HabitsScreen />
              </PrivatePage>
            }
          />
          <Route
            path="/hoje"
            element={
              <PrivatePage>
                <TodayScreen />
              </PrivatePage>
            }
          />
          <Route
            path="/historico"
            element={
              <PrivatePage>
                <HistoryScreen />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
