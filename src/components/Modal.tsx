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

const Modal: React.FC<ModalProps> = (props) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div id="modal" className="modal">
      <div className={`modal-content card-${theme} animate-up delay-1`}>
        <div className="modal-body">
          <h2>{props.textError}</h2>
          <img src={errorImg} alt="Erro" />
        </div>

        <div className="modal-footer">
          <Link to="/">
            <button className="btn-purple">
              <FiHome size={16} />
              <span>Voltar para a página inicial</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;