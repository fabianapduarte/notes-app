import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import FormNote from '../components/FormNote';
import { DataNotesProps } from '../utils/NoteInterface';

function AddNote() {
  const history = useHistory();

  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  function addNewNote() {
    const title = (document.getElementById("title") as HTMLInputElement)?.value;
    const text = (document.getElementById("text") as HTMLInputElement)?.value;

    const lastNoteId = dataNotes[dataNotes.length - 1]?.id || 0;

    if (title !== "" && text !== "") {
      const newData: DataNotesProps[] = [
        ...dataNotes,
        {
          id: lastNoteId + 1,
          title: title,
          text: text
        }
      ];

      localStorage.setItem("notes", JSON.stringify(newData));
    }

    history.push('/');
  }

  return (
    <div className="container note-fullscreen">
      <header className="align-items-header">
        <Link to="/">
          <FiArrowLeft size={24} color="#9768D1" />
        </Link>

        <div className="header-buttons">
          <Link to="/">
            <button className="btn-gray">
              <FiX size={16} />
              <span>Cancelar</span>
            </button>
          </Link>

          <button type="submit" form="form-note" onClick={addNewNote} className="btn-green">
            <FiCheck size={16} />
            <span>Salvar nota</span>
          </button>
        </div>
      </header>

      <FormNote className="form-card-note" />
    </div>
  );
}

export default AddNote;