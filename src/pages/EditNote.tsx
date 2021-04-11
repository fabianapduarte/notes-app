import { useState, useEffect, useContext } from 'react';
import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';

import FormNote from '../components/FormNote';
import Modal from '../components/Modal';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataNotesProps } from '../utils/NoteInterface';

interface ParamsProps {
  id: string;
}

function EditNote(props: RouteComponentProps<ParamsProps>) {
  const history = useHistory();

  const { theme } = useContext(ThemeContext);
  document.querySelector("body")?.classList.add(`bg-${theme}`);

  let dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  const [note, setNote] = useState<DataNotesProps | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const noteIdUrl = props.match.params.id;

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
  
  useEffect(() => {
    loadingNote(noteIdUrl);
  }, [noteIdUrl]);

  function updateNote(idNote: string) {
    const updatedTitle = (document.getElementById("title") as HTMLInputElement)?.value;
    const updatedText = (document.getElementById("text") as HTMLInputElement)?.value;

    if (updatedTitle !== "" || updatedText !== "") {
      dataNotes.forEach(note => {
        if (note.id === Number(idNote)) {
          note.title = updatedTitle;
          note.text = updatedText;
        }
      });

      localStorage.setItem("notes", JSON.stringify(dataNotes));

      history.push("/");
    }
    else {
      alert("Preencha pelo menos um dos campos.")
    }
  }

  return (
    <div className="container note-fullscreen">
      <header className="align-items-header">
        <Link to="/" className="animate-up">
          <FiArrowLeft size={24} color="#9768D1" />
        </Link>

        <div className="header-buttons">
          <Link to="/">
            <button className="btn-gray animate-up">
              <FiX size={16} />
              <span>Cancelar</span>
            </button>
          </Link>

          <button className="btn-green animate-up" onClick={() => updateNote(noteIdUrl)}>
            <FiCheck size={16} />
            <span>Salvar nota</span>
          </button>
        </div>
      </header>

      {loading === false
        ?
        (
          note
          ?
          (
            <FormNote
              key={note.id}
              className="form-card-note animate-up delay-1"
              title={note.title}
              text={note.text}
            />
          )
          :
          (
            <Modal
              text="Nota não encontrada"
           />
          )
        )
        :
        console.log('loading')
      }
    </div>
  );
}

export default EditNote;