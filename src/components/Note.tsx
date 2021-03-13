import { FiClock } from 'react-icons/fi';
import '../styles/components/note.css';

interface NoteProps {
  title: string,
  text: string,
  className?: string
}

const Note: React.FC<NoteProps> = (props) => {
  return (
    <div className={`card-note card-light ${props.className}`}>
      <h2>{props.title}</h2>
      {/* <small>
        <FiClock size={12} />
        <span>07/03/2021 às 14:46</span>
      </small> */}
      <div className="card-text">{props.text}</div>
      {props.children}
    </div>
  );
}

export default Note;