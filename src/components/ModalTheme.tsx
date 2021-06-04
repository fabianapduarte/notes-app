import { useContext } from "react";
import { FiMoon, FiSun, FiX } from "react-icons/fi";

import { ThemeContext } from "../contexts/ThemeContext";

import "../styles/components/modal.css";
import "../styles/components/note.css";
import "../styles/animations.css";

export function openModal() {
  document.getElementById("modal")?.classList.remove("modal-display-none");
}

export function closeModal() {
  document.getElementById("modal")?.classList.add("modal-display-none");
} 

const ModalTheme = () => {
  const { theme, color, switchColor, switchTheme } = useContext(ThemeContext);

  return (
    <div id="modal" className="modal modal-display-none">
      <div className={`modal-content card-${theme} animate-up delay-1`}>
        <main>
          <section>
            <strong>Tema</strong>
            <div className="themes mode">
              <button
                className="animate-up btn-mode btn-mode-light"
                onClick={() => switchTheme("light")}
                aria-label="Modo claro"
              >
                <FiSun className="icon-light-mode" size={16} />
                <span>Modo claro</span>
              </button>

              <button
                className="animate-up btn-mode btn-mode-dark"
                onClick={() => switchTheme("dark")}
                aria-label="Modo escuro"
              >
                <FiMoon className="icon-dark-mode" size={16} />
                <span>Modo escuro</span>
              </button>
            </div>
          </section>

          <section>
            <strong>Cor</strong>
            <div className="themes">
              <div
                className="color green"
                onClick={() => switchColor("green")}
                aria-label="Cor verde claro"
              />
              <div
                className="color purple"
                onClick={() => switchColor("purple")}
                aria-label="Cor lilás"
              />
              <div
                className="color blue"
                onClick={() => switchColor("blue")}
                aria-label="Cor azul claro"
              />
              <div
                className="color pink"
                onClick={() => switchColor("pink")}
                aria-label="Cor rosa claro"
              />
              <div
                className="color yellow"
                onClick={() => switchColor("yellow")}
                aria-label="Cor amarelo claro"
              />
            </div>
          </section>
        </main>

        <footer>
          <button
            className={`btn-${color}`}
            onClick={closeModal}
            aria-label="Fechar"
          >
            <FiX size={16} />
            <span>Fechar</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ModalTheme;