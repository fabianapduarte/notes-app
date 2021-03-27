import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMoon } from 'react-icons/fi';

import Note from '../components/Note';

import '../styles/pages/home.css';
import addNote from '../assets/add-note.svg';

interface DataNotesProps {
  id: number,
  title: string,
  text: string
}

const Home = () => {
  const [dataNotes, setDataNotes] = useState<Array<DataNotesProps>>(JSON.parse(localStorage.getItem("notes")!));

  function formatTextCard(text: string) {
    let newString = limitTextLength(text);
    
    return limitTextLines(newString);
  }

  function limitTextLines(text: string) {
    let textLines = text.split("\n");

    if (textLines.length > 5) {
      let newText = "";

      for (let i = 0; i < 5; i++) {
        newText += textLines[i];
        
        if (i !== 4) {
          newText += "\n";
        }
      }

      return `${newText}...`;
    }

    return text;
  }

  function limitTextLength(text: string) {
    if(text.length > 250) {
      return `${text.substr(0, 250)}...`;
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

      {dataNotes.length === 0 ? (
        <div className="no-notes">
          <div className="text-no-notes">Você não possui notas.</div>
          <img src={addNote} alt="Adicionar nota"/>
        </div>
      ) : (
        <div className="cards-notes">
          {dataNotes.map(note => {
            return (
              <Note
                key={note.id}
                title={note.title === "" ? "Sem título" : note.title}
                text={formatTextCard(note.text)}
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