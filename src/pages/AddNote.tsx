import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import FormNote from '../components/FormNote';

function AddNote() {
  return (
    <div className="container note-fullscreen">
      <header className="align-items-header">
        <Link to="/">
          <FiArrowLeft size={24} color="#9768D1" />
        </Link>

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