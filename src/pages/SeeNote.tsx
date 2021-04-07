import { useEffect, useState } from 'react';
import { FiArrowLeft, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';

import Note from '../components/Note';
import { DataNotesProps } from '../utils/NoteInterface';

import '../styles/pages/see-note.css';

interface ParamsProps {
  id: string
}

function SeeNote(props: RouteComponentProps<ParamsProps>) {
  const history = useHistory();

  const [note, setNote] = useState<DataNotesProps | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const noteIdUrl = props.match.params.id;

  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem('notes')!);

  function loadingNote(noteIdUrl: string) {
    dataNotes.forEach(note => {
      if (note.id === Number(noteIdUrl)) {
        setNote({
          id: note.id,
          title: note.title,
          text: note.text
        });
      }
    });

    setLoading(false);
  }

  function redirectToHome() {
    alert("A nota não foi encontrada");
    history.push("/");
  }

  function deleteNote(noteId: string) {
    const newDataNotes = dataNotes.filter(note => note.id !== Number(noteId));

    localStorage.setItem("notes", JSON.stringify(newDataNotes));

    history.push("/");
  }

  useEffect(() => {
    loadingNote(noteIdUrl);
  }, [noteIdUrl]);

  return (
    <div className="container note-fullscreen">
      <header className="align-items-header">
        <Link to="/" className="animate-up">
          <FiArrowLeft size={24} color="#9768D1" />
        </Link>

        <div className="header-buttons">
          <Link to={`/edit/${noteIdUrl}`}>
            <button className="btn-purple animate-up">
              <FiEdit size={16} />
              <span>Editar nota</span>
            </button>
          </Link>

          <button onClick={() => deleteNote(noteIdUrl)} className="btn-red animate-up">
            <FiTrash2 size={16} />
            <span>Excluir nota</span>
          </button>
        </div>
      </header>

      {loading === false
        ?
        (
          note
          ?
          (
            <Note
              key={note.id}
              title={note.title}
              text={note.text}
              className="card-see-note animate-up delay-1"
            />
          )
          :
          (redirectToHome())
        )
        :
        console.log('loading')
      }
    </div>
  );
}

export default SeeNote;