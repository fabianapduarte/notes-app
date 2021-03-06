import { useContext, useEffect, useState } from 'react';
import { FiArrowLeft, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';

import Note from '../components/Note';
import ModalError from '../components/ModalError';
import { DataNotesProps } from '../interfaces/NoteInterface';
import { ThemeContext } from '../contexts/ThemeContext';

import '../styles/pages/see-note.css';
import { useRemark } from 'react-remark';

interface ParamsProps {
  id: string
}

function SeeNote(props: RouteComponentProps<ParamsProps>) {
  const history = useHistory();

  const { setThemePage, color } = useContext(ThemeContext);
  setThemePage();

  const [note, setNote] = useState<DataNotesProps | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const noteIdUrl = props.match.params.id;

  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem('notes')!);

  const [reactContent, setMarkdownSource] = useRemark();

  function loadingNote(noteIdUrl: string) {
    dataNotes.forEach(note => {
      if (note.id === Number(noteIdUrl)) {
        setNote({
          id: note.id,
          title: note.title,
          text: note.text,
          created_at: note.created_at
        });
      }
    });

    setLoading(false);
  }

  function deleteNote(noteId: string) {
    const newDataNotes = dataNotes.filter(note => note.id !== Number(noteId));

    localStorage.setItem("notes", JSON.stringify(newDataNotes));

    history.push("/");
  }

  useEffect(() => {
    loadingNote(noteIdUrl);
  }, [noteIdUrl]);

  useEffect(() => {
    note && setMarkdownSource(note.text)
  }, [note])

  return (
    <div className="container note-fullscreen">
      <header>
        <Link
          to="/"
          className="animate-up"
          aria-label="Voltar para a página inicial"
        >
          <FiArrowLeft size={24} color="#999999" />
        </Link>

        <div className="header-buttons">
          <Link to={`/edit/${noteIdUrl}`}>
            <button
              className={`btn-${color} animate-up`}
              aria-label="Editar nota"
            >
              <FiEdit size={16} />
              <span>Editar nota</span>
            </button>
          </Link>

          <button
            onClick={() => deleteNote(noteIdUrl)}
            className={`btn-${color} animate-up`}
            aria-label="Excluir nota"
          >
            <FiTrash2 size={16} />
            <span>Excluir nota</span>
          </button>
        </div>
      </header>

      {
        loading === false ? (
          note ? (
            <Note
              key={note.id}
              title={note.title}
              text={reactContent}
              created_at={note.created_at}
              className="card-see-note animate-up delay-1"
            />
          ) : (
            <ModalError textError="Nota não encontrada" />
          )
        ) : ""
      }
    </div>
  );
}

export default SeeNote;