import { useContext } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { format } from 'date-fns';

import { ThemeContext } from '../contexts/ThemeContext';

import '../styles/components/note.css';
import '../styles/components/card-note-home.css';

interface NoteHomeProps {
  title: string,
  created_at: number
}

const CardNoteHome: React.FC<NoteHomeProps> = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card-note card-${theme} card-note-home`}>
      <h1>{props.title === "" ? <i>Sem título</i> : props.title}</h1>
      <small>
        <FiCalendar size={12} />
        <span>{format(props.created_at, "dd/MM/yyyy")}</span>
      </small>
    </div>
  );
}

export default CardNoteHome;