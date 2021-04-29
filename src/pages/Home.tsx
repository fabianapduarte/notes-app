import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMoon, FiSun } from 'react-icons/fi';

import Note from '../components/Note';
import { ThemeContext } from '../contexts/ThemeContext';
import { DataNotesProps } from '../interfaces/NoteInterface';
import { formatTextCard } from '../utils/textCardFormatting';

import '../styles/pages/home.css';
import addNote from '../assets/add-note.svg';

const Home = () => {
  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  const { theme, switchTheme } = useContext(ThemeContext);
  document.querySelector("body")?.classList.add(`bg-${theme}`);

  return (
    <div className="container">
      <header>
        <div className="logo-title">
          <h1 className="animate-up">Suas anotações</h1>
          <div className="marker animate-marker delay-1"></div>
        </div>

        <div className="header-buttons">
          <Link to="/add">
            <button className="btn-purple animate-up">
              <FiPlus size={16} />
              <span>Adicionar nota</span>
            </button>
          </Link>
          
          <button className="btn-purple animate-up btn-mode" onClick={switchTheme}>
            {theme === "light" ? (
              <>
                <FiMoon className="icon-dark-mode" size={16} />
                <span>Modo escuro</span>
              </>
            ) : (
              <>
                <FiSun className="icon-light-mode" size={16} />
                <span>Modo claro</span>
              </>
            )}
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
              <Note
                key={note.id}
                title={note.title}
                text={formatTextCard(note.text)}
                created_at={note.created_at}
                className="card-note-home"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;