import { useContext } from "react";
import { FiMoon, FiSun, FiX } from "react-icons/fi";

import { ThemeContext } from "../contexts/ThemeContext";

import "../styles/components/modal.css";
import "../styles/components/note.css";

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
                className="btn-purple animate-up btn-mode"
                onClick={() => switchTheme("light")}
                aria-label="Modo claro"
              >
                <FiSun className="icon-light-mode" size={16} />
                <span>Modo claro</span>
              </button>

              <button
                className="btn-purple animate-up btn-mode"
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
              />
              <div
                className="color purple"
                onClick={() => switchColor("purple")}
              />
              <div
                className="color blue"
                onClick={() => switchColor("blue")}
              />
              <div
                className="color pink"
                onClick={() => switchColor("pink")}
              />
              <div
                className="color yellow"
                onClick={() => switchColor("yellow")}
              />
            </div>
          </section>
        </main>

        <footer>
          <button className="btn-purple" onClick={closeModal}>
            <FiX size={16} />
            <span>Fechar</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ModalTheme;