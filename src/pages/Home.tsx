import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMoon, FiSun } from 'react-icons/fi';

import CardNoteHome from '../components/CardNoteHome';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataNotesProps } from '../interfaces/NoteInterface';

import '../styles/pages/home.css';
import addNote from '../assets/add-note.svg';

const Home = () => {
  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  const { theme, setThemePage, switchTheme } = useContext(ThemeContext);
  setThemePage();

  return (
    <div className="container">
      <header>
        <div className="logo-title">
          <h1 className="animate-up">Suas anotações</h1>
          <div className="marker animate-marker delay-1"></div>
        </div>

        <div className="header-buttons">
          <Link to="/add">
            <button className="btn-purple animate-up" aria-label="Adicionar nota">
              <FiPlus size={16} />
              <span>Adicionar nota</span>
            </button>
          </Link>

          {theme === "light" ? (
            <button className="btn-purple animate-up btn-mode" onClick={switchTheme} aria-label="Modo escuro">
              <FiMoon className="icon-dark-mode" size={16} />
              <span>Modo escuro</span>
            </button>
          ) : (
            <button className="btn-purple animate-up btn-mode" onClick={switchTheme} aria-label="Modo claro">
              <FiSun className="icon-light-mode" size={16} />
              <span>Modo claro</span>
            </button>
          )}
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
    </div>
  );
}

export default Home;