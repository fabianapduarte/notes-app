import { useEffect, useState } from 'react';
import { FiArrowLeft, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import Note from '../components/Note';

import '../styles/pages/see-note.css';

interface DataNotesProps {
  id: string;
  title: string;
  text: string;
}

interface ParamsProps {
  id: string
}

function SeeNote(props: RouteComponentProps<ParamsProps>) {
  const history = useHistory();

  const [note, setNote] = useState<DataNotesProps | null>(null);

  const noteId = props.match.params.id;

  function verifyNote(noteId: string) {
    const dataNotes = JSON.parse(localStorage.getItem('notes')!);

    dataNotes.forEach((note: DataNotesProps) => {
      if(note.id === noteId) {
        setNote({
          id: note.id,
          title: note.title,
          text: note.text
        });
      }
    });
  }

  useEffect(() => {
    verifyNote(noteId);
  }, [noteId]);

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

      {note ? (
        <Note
          key={note.id}
          title={note.title}
          text={note.text}
          className="card-see-note"
        />
      ) : (
        alert("Nota não encontrada...")
      )}
    </div>
  );
}

export default SeeNote;