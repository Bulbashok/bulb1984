import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GeneratedForm from '../GeneratedForm/GeneratedForm';
import styles from './FormBuilder.module.css';

interface FormConfig {
  input: number;
  textarea: number;
  checkbox: number;
}

export default function FormBuilder() {
  const [formConfig, setFormConfig] = useState<FormConfig>({
    input: 0,
    textarea: 0,
    checkbox: 0
  });
  const [isFormBuilt, setIsFormBuilt] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormConfig(prev => ({
      ...prev,
      [name]: Math.max(0, parseInt(value) || 0)
    }));
  };

  const handleBuild = () => {
    if (Object.values(formConfig).some(val => val > 0)) {
      setIsFormBuilt(true);
    }
  };

  const handleReset = () => {
    setIsFormBuilt(false);
    setFormConfig({
      input: 0,
      textarea: 0,
      checkbox: 0
    });
  };

  if (isFormBuilt) {
    return (
      <div className={styles.container}>
        <GeneratedForm config={formConfig} />
        <button className={styles.button} onClick={handleReset}>
          Back to Builder
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Form Builder</h2>
      <div className={styles.controlGroup}>
        <label>Input fields:</label>
        <input
          type="number"
          name="input"
          value={formConfig.input}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div className={styles.controlGroup}>
        <label>Textarea fields:</label>
        <input
          type="number"
          name="textarea"
          value={formConfig.textarea}
          onChange={handleChange}
          min="0"
        />
      </div>
      <div className={styles.controlGroup}>
        <label>Checkbox fields:</label>
        <input
          type="number"
          name="checkbox"
          value={formConfig.checkbox}
          onChange={handleChange}
          min="0"
        />
      </div>
      <button className={styles.button} onClick={handleBuild}>
        Build Form
      </button>
      <button className={styles.button} onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}