import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

interface DataNotesProps {
  id: number,
  title: string,
  text: string
}

function AddNote() {
  const history = useHistory();

  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  function saveNote() {
    const title = (document.getElementById("title") as HTMLInputElement)?.value;
    const text = (document.getElementById("text") as HTMLInputElement)?.value;

    const lastNoteId = dataNotes[dataNotes.length - 1]?.id || 0 

    const newData: DataNotesProps[] = [
      ...dataNotes,
      {
        id: lastNoteId + 1,
        title: title,
        text: text
      }
    ];

    localStorage.setItem("notes", JSON.stringify(newData));

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

          <button onClick={saveNote} className="btn-green">
            <FiCheck size={16} />
            <span>Salvar nota</span>
          </button>
        </div>
      </header>

      <form className="card-note form-card-note card-light">
        <input
          name="title"
          id="title" 
          className="input-card-note" 
          type="text" 
          placeholder="Título" 
          maxLength={100}
        />
        <textarea 
          name="text" 
          id="text" 
          className="input-card-note" 
          placeholder="Texto"
        ></textarea>
      </form>
    </div>
  );
}

export default AddNote;