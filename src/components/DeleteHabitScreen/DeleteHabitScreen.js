import { DeleteScreen, Cancel, ButtonCancel, ButtonNo } from "./styles";
import { deleteHabit } from "../../services/trackitServices";

export default function DeleteHabitScreen({
  tittle,
  id,
  token,
  reload,
  setReload,
  setDeleteHab,
}) {
  return (
    <>
      <DeleteScreen>
        <Cancel>Você deseja excluir o hábito "{tittle}"?</Cancel>
        <ButtonCancel
          onClick={() => deleteHabit(id, token).then(setReload(!reload))}
        >
          Sim
        </ButtonCancel>
        <ButtonNo onClick={() => setDeleteHab(false)}>Não</ButtonNo>
      </DeleteScreen>
    </>
  );
}
