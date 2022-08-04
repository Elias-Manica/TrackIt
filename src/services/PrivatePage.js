import { useContext } from "react";
import TokenUser from "../context/tokencontext";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const { token, setToken } = useContext(TokenUser);

  console.log(token, auth);

  if (auth.token === token) {
    return <>{children}</>;
  } else {
    return <h1>SEM AUTORIZAÇÃO</h1>;
  }
}
