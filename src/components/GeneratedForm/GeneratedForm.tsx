import { useState } from 'react';
import styles from './GeneratedForm.module.css';
import { FormConfig } from '../../types';

interface GeneratedFormProps {
  formConfig: FormConfig;
  onReset: () => void;
}

export default function GeneratedForm({ formConfig, onReset }: GeneratedFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (id: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Generated Form</h2>
        <p className={styles.subtitle}>Your custom form based on the configuration</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {Array.from({ length: formConfig.input }).map((_, i) => (
          <div key={`input-${i}`} className={styles.formGroup}>
            <label 
              htmlFor={`input-${i}`} 
              className={styles.label}
            >
              Input {i + 1}:
            </label>
            <input 
              type="text" 
              id={`input-${i}`}
              placeholder="Enter text here..."
              value={formData[`input-${i}`] || ''}
              onChange={(e) => handleInputChange(`input-${i}`, e.target.value)}
              className={styles.input}
            />
          </div>
        ))}

        {Array.from({ length: formConfig.textarea }).map((_, i) => (
          <div key={`textarea-${i}`} className={styles.formGroup}>
            <label 
              htmlFor={`textarea-${i}`} 
              className={styles.label}
            >
              Textarea {i + 1}:
            </label>
            <textarea 
              id={`textarea-${i}`}
              rows={3}
              placeholder="Enter your message here..."
              value={formData[`textarea-${i}`] || ''}
              onChange={(e) => handleInputChange(`textarea-${i}`, e.target.value)}
              className={styles.textarea}
            />
          </div>
        ))}

        {Array.from({ length: formConfig.checkbox }).map((_, i) => (
          <div key={`checkbox-${i}`} className={styles.checkboxGroup}>
            <input 
              type="checkbox" 
              id={`checkbox-${i}`}
              checked={formData[`checkbox-${i}`] || false}
              onChange={(e) => handleInputChange(`checkbox-${i}`, e.target.checked)}
              className={styles.checkbox}
            />
            <label 
              htmlFor={`checkbox-${i}`} 
              className={styles.checkboxLabel}
            >
              Checkbox {i + 1}
            </label>
          </div>
        ))}

        {(formConfig.input > 0 || formConfig.textarea > 0 || formConfig.checkbox > 0) && (
          <div className={styles.submitSection}>
            <button 
              type="submit"
              className={styles.submitButton}
            >
              Submit Form
            </button>
          </div>
        )}
      </form>

      <div className={styles.resetSection}>
        <button 
          onClick={onReset}
          className={styles.resetButton}
        >
          Back to Builder
        </button>
      </div>
    </div>
  );
}