import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivatePage from "../services/PrivatePage";
import UserContext from "../context/imagecontext";
import TokenUser from "../context/tokencontext";
import ListDays from "../context/listDayscontext";
import HabitDone from "../context/habitsDonecontext";
import QtdHabits from "../context/qtdHabitscontext";

import { GlobalStyle } from "../assets/styles/GlobalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";
import SingUpScreen from "./SingUpScreen/SingUpScreen";
import HabitsScreen from "./HabitsScreen/HabitsScreen";
import TodayScreen from "./TodayScreen/TodayScreen";
import HistoryScreen from "./HistoryScreen/HistoryScreen";

export default function App() {
  const [picUser, setPicUser] = React.useState([]);
  const [token, setToken] = React.useState([]);
  const [listDays, setListDays] = React.useState([]);
  const [habitDone, setHabitDone] = React.useState(0);
  const [lengthHabits, setLengthHabits] = React.useState({});

  return (
    <>
      <TokenUser.Provider value={{ token, setToken }}>
        <QtdHabits.Provider value={{ lengthHabits, setLengthHabits }}>
          <HabitDone.Provider value={{ habitDone, setHabitDone }}>
            <ListDays.Provider value={{ listDays, setListDays }}>
              <UserContext.Provider value={{ picUser, setPicUser }}>
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
              </UserContext.Provider>
            </ListDays.Provider>
          </HabitDone.Provider>
        </QtdHabits.Provider>
      </TokenUser.Provider>
    </>
  );
}
