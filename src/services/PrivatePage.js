import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TokenUser from "../context/tokencontext";
import { View, Button } from "../components/PageDesconected/styles";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const { token } = useContext(TokenUser);

  const navigate = useNavigate();

  if (auth.token === token) {
    return <>{children}</>;
  } else {
    return (
      <View>
        <h1>Você foi desconectado, faça login novamente</h1>
        <Button onClick={() => navigate("/")}>Clique aqui</Button>
      </View>
    );
  }
}
