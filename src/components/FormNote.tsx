import '../styles/components/form-note.css';
import '../styles/components/note.css';

interface FormProps {
  title?: string,
  text?: string
}

const FormNote: React.FC<FormProps> = (props) => {
  return (
    <div className="card-note card-light">
      <input name="title" id="title" className="input-card-note" type="text" placeholder="Título" maxLength={100} value={props.title} />
      <textarea name="text" id="text" className="input-card-note" placeholder="Texto" value={props.text}></textarea>
    </div>
  );
}

export default FormNote;