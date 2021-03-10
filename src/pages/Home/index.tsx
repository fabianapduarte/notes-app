import { FiPlus, FiMoon } from 'react-icons/fi';
import './styles.css';

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
    </div>
  );
}

export default Home;