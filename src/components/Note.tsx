import { ReactElement, useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { format } from 'date-fns';

import { ThemeContext } from '../contexts/ThemeContext';

import '../styles/components/note.css';

interface NoteProps {
  title: string,
  text: string | null | ReactElement,
  created_at: number,
  className?: string
}

const Note: React.FC<NoteProps> = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card-note card-${theme} ${props.className}`}>
      <h1>{props.title === "" ? <i>Sem título</i> : props.title}</h1>
      <small>
        <FiCalendar size={12} />
        <span>{format(props.created_at, "dd/MM/yyyy")}</span>
      </small>
      <div className="card-text">
        {props.text === "" ? <i>Sem texto</i> : props.text}
      </div>
      {props.children}
    </div>
  );
}

export default Note;