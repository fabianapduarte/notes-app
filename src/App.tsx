import Routes from './routes';
import initializeLocalStorage from './utils/initializeLocalStorage';
import { ThemeProvider } from './contexts/ThemeContext';

import './styles/global.css';
import './styles/animations.css';
import './styles/header.css';

function App() {
  initializeLocalStorage();

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
