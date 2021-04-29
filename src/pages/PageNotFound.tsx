import { useContext } from "react";

import Modal from "../components/Modal";
import { ThemeContext } from "../contexts/ThemeContext";

function PageNotFound() {
  const { setThemePage } = useContext(ThemeContext);
  setThemePage();
  
  return (
    <Modal textError="Página não encontrada" />
  )
}

export default PageNotFound;