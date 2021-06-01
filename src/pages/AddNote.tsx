import { useContext } from 'react';
import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import FormNote from '../components/FormNote';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataNotesProps } from '../interfaces/NoteInterface';

function AddNote() {
  const history = useHistory();

  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  const { setThemePage, color } = useContext(ThemeContext);
  setThemePage();

  function addNewNote() {
    const title = (document.getElementById("title") as HTMLInputElement)?.value;
    const text = (document.getElementById("text") as HTMLInputElement)?.value;

    const lastNoteId = dataNotes[dataNotes.length - 1]?.id || 0;

    if (title !== "" || text !== "") {
      const newData: DataNotesProps[] = [
        ...dataNotes,
        {
          id: lastNoteId + 1,
          title: title,
          text: text,
          created_at: Date.now()
        }
      ];

      localStorage.setItem("notes", JSON.stringify(newData));
    }
    else {
      alert("Não há nada para salvar. Nota descartada.");
    }

    history.push('/');
  }

  return (
    <div className="container note-fullscreen">
      <header>
        <Link
          to="/"
          className="animate-up"
          aria-label="Voltar para a página inicial"
        >
          <FiArrowLeft size={24} color="#9768D1" />
        </Link>

        <div className="header-buttons">
          <Link to="/" aria-label="Cancelar">
            <button className={`btn-outline-${color} animate-up`}>
              <FiX size={16} />
              <span>Cancelar</span>
            </button>
          </Link>

          <button
            type="submit"
            form="form-note"
            onClick={addNewNote}
            className={`btn-${color} animate-up`}
            aria-label="Salvar nota"
          >
            <FiCheck size={16} />
            <span>Salvar nota</span>
          </button>
        </div>
      </header>

      <FormNote className="form-card-note animate-up delay-1" />
    </div>
  );
}

export default AddNote;