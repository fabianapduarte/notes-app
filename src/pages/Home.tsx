import { FiPlus, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Note from '../components/Note';

import '../styles/pages/home.css';
import data from '../data.json';
import addNote from '../assets/add-note.svg';

const dataNotes = data;

const Home = () => {
  function limitTextLength(text: string) {
    if(text.length > 250) {
      return `${text.substring(0, 250)}...`;
    }
    return text;
  }

  return (
    <div className="bg-light container">
      <header>
        <div className="logo-title">
          <h1>Suas anotações</h1>
          <div className="marker"></div>
        </div>

        <div className="header-buttons">
          <Link to="/add">
            <button className="btn-purple">
              <FiPlus size={16} />
              <span>Adicionar nota</span>
            </button>
          </Link>
          

          <button className="btn-purple">
            <FiMoon size={16} />
            <span>Modo noturno</span>
          </button>
        </div>
      </header>

      {dataNotes.notes.length === 0 ? (
        <div className="no-notes">
          <div className="text-no-notes">Você não possui notas.</div>
          <img src={addNote} alt="Adicionar nota"/>
        </div>
      ) : (
        <div className="cards-notes">
          {dataNotes.notes.map(note => {
            return (
              <Note
                key={note.id}
                title={note.title === "" ? "Sem título" : note.title}
                text={limitTextLength(note.text)}
                className="card-note-home"
              >
                <Link to={`note/${note.id}`}>Ver nota</Link>
              </Note>
            )
          })}
        </div>
      )}
    </div>
  );
}

export default Home;