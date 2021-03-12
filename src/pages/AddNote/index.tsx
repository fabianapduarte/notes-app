import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi';
import FormNote from '../../components/FormNote';
import './styles.css';

function AddNote() {
  return (
    <div className="container">
      <header>
        <FiArrowLeft size={24} color="#9768D1" />

        <div className="header-buttons">
          <button className="btn-gray">
            <FiX size={16} />
            <span>Cancelar</span>
          </button>

          <button className="btn-green">
            <FiCheck size={16} />
            <span>Salvar nota</span>
          </button>
        </div>
      </header>

      <FormNote />
    </div>
  );
}

export default AddNote;