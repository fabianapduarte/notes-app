import { Link } from 'react-router-dom';
import { FiPlus, FiMoon } from 'react-icons/fi';

import Note from '../components/Note';
import { DataNotesProps } from '../utils/NoteInterface';

import '../styles/pages/home.css';
import addNote from '../assets/add-note.svg';

const Home = () => {
  const dataNotes: DataNotesProps[] = JSON.parse(localStorage.getItem("notes")!);

  function formatTextCard(text: string) {
    let newString = limitTextLength(text);
    
    return limitTextLines(newString);
  }

  function limitTextLines(text: string) {
    const textLines = text.split("\n");

    if (textLines.length > 4) {
      let newText = "";

      for (let i = 0; i < 4; i++) {
        newText += textLines[i];
        
        if (i !== 3) {
          newText += "\n";
        }
      }

      return `${newText}...`;
    }

    return text;
  }

  function limitTextLength(text: string) {
    if(text.length > 180) {
      return `${text.substr(0, 180)}...`;
    }
    return text;
  }

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
          
          <button className="btn-purple animate-up">
            <FiMoon size={16} />
            <span>Modo noturno</span>
          </button>
        </div>
      </header>

      {dataNotes.length === 0 ? (
        <div className="no-notes">
          <div className="text-no-notes animate-up">Você não possui notas.</div>
          <img src={addNote} alt="Adicionar nota" className="animate-up delay-1" />
        </div>
      ) : (
        <div className="cards-notes">
          {dataNotes.map(note => (
            <Link to={`note/${note.id}`} key={note.id} className="card-note-link animate-up delay-1">
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