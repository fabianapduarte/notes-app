import { ReactElement, useContext } from 'react';
import { FiClock } from 'react-icons/fi';

import { ThemeContext } from '../contexts/ThemeContext';

import '../styles/components/note.css';

interface NoteProps {
  title: string,
  text: string | null | ReactElement,
  created_at: number,
  className?: string
}

function convertMsToDate(dateInMs: number) {
  const noteCreationDateInMs = new Date(dateInMs);

  // conversão da data
  const date = {
    hours: noteCreationDateInMs.getHours(),
    minutes: noteCreationDateInMs.getMinutes(),
    day: noteCreationDateInMs.getDate(),
    month: noteCreationDateInMs.getMonth(),
    year: noteCreationDateInMs.getFullYear()
  }

  const dateFormated = `${date.day}/${date.month}/${date.year} às ${date.hours}:${date.minutes}`;

  return dateFormated;
}

const Note: React.FC<NoteProps> = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card-note card-${theme} ${props.className}`}>
      <h2>{props.title === "" ? <i>Sem título</i> : props.title}</h2>
      <small>
        <FiClock size={12} />
        <span>{convertMsToDate(props.created_at)}</span>
      </small>
      <div className="card-text">{props.text === "" ? <i>Sem texto</i> : props.text}</div>
      {props.children}
    </div>
  );
}

export default Note;