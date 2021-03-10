import { FiPlus, FiMoon } from 'react-icons/fi';
import { Note } from '../../components/Note';
import './styles.css';

import addNote from '../../assets/add-note.svg';

function Home() {
  return (
    <div className="bg-light container">
      <header>
        <div className="logo-title">
          <h1>Suas anotações</h1>
          <div className="marker"></div>
        </div>

        <div className="header-buttons">
          <button className="btn-purple">
            <FiPlus size={16} />
            <span>Adicionar nota</span>
          </button>

          <button className="btn-purple">
            <FiMoon size={16} />
            <span>Modo noturno</span>
          </button>
        </div>
      </header>

      <div className="no-notes">
        <div className="text-no-notes">Você não possui notas.</div>
        <img src={addNote} alt="Adicionar nota"/>
      </div>

      {/*<div className="cards-notes">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>*/}
    </div>
  );
}

export default Home;