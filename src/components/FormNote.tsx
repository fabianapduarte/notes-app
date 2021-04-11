import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import '../styles/components/form-note.css';
import '../styles/components/note.css';

interface FormProps {
  title?: string,
  text?: string,
  className?: string
}

const FormNote: React.FC<FormProps> = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <form id="form-note" className={`card-note card-${theme} ${props.className}`}>
      <input name="title" id="title" className={`input-card-note input-card-note-${theme}`} type="text" placeholder="Título" maxLength={100} defaultValue={props.title} />
      <textarea name="text" id="text" className={`input-card-note input-card-note-${theme}`} placeholder="Texto" defaultValue={props.text}></textarea>
    </form>
  );
}

export default FormNote;