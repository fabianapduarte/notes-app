import './styles.css';
import '../Note/styles.css';

const FormNote = () => {
  return (
    <div className="card-note card-light">
      <input name="title" id="title" className="input-card-note" type="text" placeholder="Título" maxLength={100} />
      <textarea name="text" id="text" className="input-card-note" placeholder="Texto"></textarea>
    </div>
  );
}

export default FormNote;