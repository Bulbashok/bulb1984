import { useNavigate } from 'react-router-dom';
import styles from '../components/FormBuilder/FormBuilder.module.css';

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <button 
        className={styles.button} 
        onClick={() => navigate('/form')}
      >
        FORM
      </button>
    </div>
  );
}