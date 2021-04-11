import { useContext } from "react";

import Modal from "../components/Modal";
import { ThemeContext } from "../contexts/ThemeContext";

function PageNotFound() {
  const { theme } = useContext(ThemeContext);
  document.querySelector("body")?.classList.add(`bg-${theme}`);
  
  return (
    <Modal text="Página não encontrada" />
  )
}

export default PageNotFound;