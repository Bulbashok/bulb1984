import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import styles from './HomePage.module.css';

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <FileText className={styles.icon} />
          </div>
          <h1 className={styles.title}>Dynamic Form Builder</h1>
          <p className={styles.subtitle}>Create custom forms with dynamic field generation</p>
        </div>
        
        <button 
          onClick={() => navigate('/form')}
          className={styles.button}
        >
          FORM
        </button>
      </div>
    </div>
  );
}