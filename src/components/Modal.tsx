import { Link } from 'react-router-dom';
import { FaRegSadTear } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';

import errorImg from '../assets/error.svg';
import "../styles/components/modal.css";

interface ModalProps {
  text: string
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div id="modal" className="modal">
      <div className="modal-content animate-up delay-1">
        <div className="modal-body">
          <h2>
            <span>{props.text}</span>
            <FaRegSadTear size={22} />
          </h2>
          <img src={errorImg} alt="Erro"/>
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