import { FiClock } from 'react-icons/fi';
import './styles.css';

export function Note() {
  return (
    <div className="card-note card-light">
      <h2>Lorem ipsum</h2>
      {/* <small>
        <FiClock size={12} />
        <span>07/03/2021 às 14:46</span>
      </small> */}
      <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...</div>
    </div>
  );
}