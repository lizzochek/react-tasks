import './ErrorModal.css';
import Card from './Card';

export default function ErrorModal({ text, onCancel }) {
  return (
    <div class='modal-backdrop'>
      <Card className='error-modal'>
        <h2>Your input is invalid</h2>
        <p>{text}</p>
        <div className='error-action'>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </Card>
    </div>
  );
}
