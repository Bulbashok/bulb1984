import { useNavigate } from "react-router-dom";
import { Edit3, AlignLeft, CheckCircle } from "lucide-react";
import styles from "./FormBuilderCard.module.css";
import { FormConfig } from "../../types";

interface FormBuilderCardProps {
  formConfig: FormConfig;
  onConfigChange: (field: keyof FormConfig, value: number) => void;
  onBuild: () => void;
}

export default function FormBuilderCard({
  formConfig,
  onConfigChange,
  onBuild,
}: FormBuilderCardProps) {
  const navigate = useNavigate();

  const handleInputChange = (field: keyof FormConfig, value: string) => {
    if (value === "") {
      onConfigChange(field, 0);
      return;
    }

    const numValue = parseInt(value);

    if (!isNaN(numValue)) {
      onConfigChange(field, numValue);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  const canBuild = Object.values(formConfig).some((val) => val > 0);

  const displayValue = (value: number) => {
    return value === 0 ? "" : value.toString();
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Form Builder</h2>
        <p className={styles.subtitle}>
          Configure the number of form elements you need (0 - 10)
        </p>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldIcon}>
              <Edit3 className={styles.icon} />
            </div>
            <div>
              <label className={styles.fieldLabel}>Text Input Fields</label>
              <p className={styles.fieldDescription}>Single-line text inputs</p>
            </div>
          </div>
          <input
            type="number"
            min="0"
            max="10"
            value={displayValue(formConfig.input)}
            onChange={(e) => handleInputChange("input", e.target.value)}
            className={styles.numberInput}
          />
        </div>

        <div className={styles.field}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldIcon}>
              <AlignLeft className={styles.icon} />
            </div>
            <div>
              <label className={styles.fieldLabel}>Textarea Fields</label>
              <p className={styles.fieldDescription}>Multi-line text areas</p>
            </div>
          </div>
          <input
            type="number"
            min="0"
            max="10"
            value={displayValue(formConfig.textarea)}
            onChange={(e) => handleInputChange("textarea", e.target.value)}
            className={styles.numberInput}
          />
        </div>

        <div className={styles.field}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldIcon}>
              <CheckCircle className={styles.icon} />
            </div>
            <div>
              <label className={styles.fieldLabel}>Checkbox Fields</label>
              <p className={styles.fieldDescription}>
                Boolean selection options
              </p>
            </div>
          </div>
          <input
            type="number"
            min="0"
            max="10"
            value={displayValue(formConfig.checkbox)}
            onChange={(e) => handleInputChange("checkbox", e.target.value)}
            className={styles.numberInput}
          />
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          onClick={onBuild}
          disabled={!canBuild}
          className={`${styles.button} ${styles.primaryButton} ${
            !canBuild ? styles.disabledButton : ""
          }`}
        >
          Build Form
        </button>
        <button
          onClick={handleBackToHome}
          className={`${styles.button} ${styles.secondaryButton}`}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
