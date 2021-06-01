import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiSliders } from 'react-icons/fi';

import CardNoteHome from '../components/CardNoteHome';
import ModalTheme, { openModal } from '../components/ModalTheme';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataNotesProps } from '../interfaces/NoteInterface';

import '../styles/pages/home.css';
import addNote from '../assets/add-note.svg';

const Home = () => {
  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  const { setThemePage, color } = useContext(ThemeContext);
  setThemePage();

  return (
    <div className="container">
      <header>
        <div className="logo-title">
          <h1 className="animate-up">Suas anotações</h1>
        </div>

        <div className="header-buttons">
          <Link to="/add">
            <button
              className={`btn-${color} animate-up`}
              aria-label="Adicionar nota"
            >
              <FiPlus size={16} />
              <span>Adicionar nota</span>
            </button>
          </Link>

          <button
            className={`btn-${color} animate-up btn-mode`}
            onClick={openModal}
            aria-label="Alterar tema"
          >
            <FiSliders size={16} />
            <span>Alterar tema</span>
          </button>
        </div>
      </header>

      {dataNotes.length === 0 ? (
        <div className="no-notes">
          <div className="text-no-notes animate-up">Você não possui notas.</div>
          <img
            src={addNote}
            alt="Adicionar nota"
            className="animate-up delay-1"
          />
        </div>
      ) : (
        <div className="cards-notes">
          {dataNotes.reverse().map(note => (
            <Link
              to={`note/${note.id}`}
              key={note.id}
              className="card-note-link animate-up delay-1"
            >
              <CardNoteHome
                key={note.id}
                title={note.title}
                created_at={note.created_at}
              />
            </Link>
          ))}
        </div>
      )}

      <ModalTheme />
    </div>
  );
}

export default Home;