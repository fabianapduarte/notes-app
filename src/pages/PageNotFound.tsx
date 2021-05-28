import { useContext } from "react";

import ModalError from "../components/ModalError";
import { ThemeContext } from "../contexts/ThemeContext";

function PageNotFound() {
  const { setThemePage } = useContext(ThemeContext);
  setThemePage();
  
  return (
    <ModalError textError="Página não encontrada" />
  )
}

export default PageNotFound;