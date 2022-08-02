import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../assets/styles/GlobalStyles";
import LoginScreen from "./LoginScreen/LoginScreen";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
