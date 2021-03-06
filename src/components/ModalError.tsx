import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

import { ThemeContext } from '../contexts/ThemeContext';

import errorImg from '../assets/error.svg';
import "../styles/components/modal.css";
import "../styles/components/note.css";

interface ModalProps {
  textError: string
}

const ModalError: React.FC<ModalProps> = (props) => {
  const { theme, color } = useContext(ThemeContext);
  
  return (
    <div id="modal" className="modal modal-error">
      <div className={`modal-content card-${theme} animate-up delay-1`}>
        <main>
          <h2>{props.textError}</h2>
          <img src={errorImg} alt="Erro" />
        </main>

        <footer>
          <Link to="/">
            <button className={`btn-${color}`}>
              <FiHome size={16} />
              <span>Voltar para a página inicial</span>
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default ModalError;