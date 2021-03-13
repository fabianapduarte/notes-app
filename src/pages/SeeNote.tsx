import { FiArrowLeft, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Note from '../components/Note';

import '../styles/pages/see-note.css';
import data from '../data.json';

const dataNotes = data;

function SeeNote() {
  return (
    <div className="container note-fullscreen">
      <header className="align-items-header">
        <Link to="/">
          <FiArrowLeft size={24} color="#9768D1" />
        </Link>

        <div className="header-buttons">
          <Link to="/edit/1">
            <button className="btn-purple">
              <FiEdit size={16} />
              <span>Editar nota</span>
            </button>
          </Link>

          <button className="btn-red">
            <FiTrash2 size={16} />
            <span>Excluir nota</span>
          </button>
        </div>
      </header>

      <Note
        key={dataNotes.notes[0].id}
        title={dataNotes.notes[0].title}
        text={dataNotes.notes[0].text}
        className="card-see-note"
      />
    </div>
  );
}

export default SeeNote;