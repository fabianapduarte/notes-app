import { FiPlus, FiMoon } from 'react-icons/fi';
import Note from '../../components/Note';
import './styles.css';

import addNote from '../../assets/add-note.svg';

function Home() {
  let textCardNote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Eget nunc lobortis mattis aliquam faucibus purus in. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Aliquam purus sit amet luctus venenatis lectus magna. Tempus urna et pharetra pharetra. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Urna nec tincidunt praesent semper feugiat nibh. Etiam sit amet nisl purus in mollis nunc. Duis at consectetur lorem donec massa sapien faucibus. Quis risus sed vulputate odio ut enim blandit. Natoque penatibus et magnis dis. Integer vitae justo eget magna fermentum iaculis eu non diam.";

  if(textCardNote.length > 250) {
    textCardNote = `${textCardNote.substring(0, 250)}...`;
  }

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

      {/*<div className="no-notes">
        <div className="text-no-notes">Você não possui notas.</div>
        <img src={addNote} alt="Adicionar nota"/>
      </div>*/}

      <div className="cards-notes">
        <Note
          title="Lorem ipsum"
          text={textCardNote}
        >
          <a href="#">Ver nota</a>
        </Note>

        <Note
          title="Lorem ipsum"
          text="Lorem ipsum."
        >
          <a href="#">Ver nota</a>
        </Note>
      </div>
    </div>
  );
}

export default Home;