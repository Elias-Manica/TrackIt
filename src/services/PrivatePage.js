import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TokenUser from "../context/tokencontext";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const { token, setToken } = useContext(TokenUser);

  const navigate = useNavigate();

  if (auth.token === token) {
    return <>{children}</>;
  } else {
    return <h1>SEM AUTORIZAÇÃO</h1>;
  }
}
