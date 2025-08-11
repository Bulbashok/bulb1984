import styles from './GeneratedForm.module.css';

interface GeneratedFormProps {
  config: {
    input: number;
    textarea: number;
    checkbox: number;
  };
}

export default function GeneratedForm({ config }: GeneratedFormProps) {
  const { input, textarea, checkbox } = config;

  return (
    <div className={styles.container}>
      <h2>Generated Form</h2>
      <form className={styles.form}>
        {Array.from({ length: input }).map((_, i) => (
          <div key={`input-${i}`} className={styles.field}>
            <label htmlFor={`input-${i}`}>Input {i + 1}:</label>
            <input
              type="text"
              id={`input-${i}`}
              placeholder={`Input ${i + 1}`}
            />
          </div>
        ))}

        {Array.from({ length: textarea }).map((_, i) => (
          <div key={`textarea-${i}`} className={styles.field}>
            <label htmlFor={`textarea-${i}`}>Textarea {i + 1}:</label>
            <textarea
              id={`textarea-${i}`}
              placeholder={`Textarea ${i + 1}`}
              rows={3}
            />
          </div>
        ))}

        {Array.from({ length: checkbox }).map((_, i) => (
          <div key={`checkbox-${i}`} className={styles.checkboxField}>
            <input type="checkbox" id={`checkbox-${i}`} />
            <label htmlFor={`checkbox-${i}`}>Checkbox {i + 1}</label>
          </div>
        ))}
      </form>
    </div>
  );
}