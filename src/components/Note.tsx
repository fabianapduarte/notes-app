import { ReactElement, useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { format } from 'date-fns';

import { ThemeContext } from '../contexts/ThemeContext';

import '../styles/components/note.css';

interface NoteProps {
  title: string,
  text: ReactElement | null,
  created_at: number,
  className?: string
}

const Note: React.FC<NoteProps> = (props) => {
  const { theme, color } = useContext(ThemeContext);

  return (
    <div className={`card-note card-${theme} ${props.className}`}>
      <h1>{props.title === "" ? <span className="no-title">Sem título</span> : props.title}</h1>
      <small className={theme === "dark" ? `${color}` : ""}>
        <FiCalendar size={12} />
        <span>{format(props.created_at, "dd/MM/yyyy")}</span>
      </small>
      <div className="card-text">{props.text}</div>
    </div>
  );
}

export default Note;