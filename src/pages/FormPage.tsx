import { useState } from 'react';
import FormBuilderCard from '../components/FormBuilder/FormBuilderCard';
import GeneratedForm from '../components/GeneratedForm/GeneratedForm';
import styles from './FormPage.module.css';
import { FormConfig } from '../types';

export default function FormBuilderPage() {
  const [formConfig, setFormConfig] = useState<FormConfig>({
    input: 0,
    textarea: 0,
    checkbox: 0
  });
  const [isFormBuilt, setIsFormBuilt] = useState(false);

  const handleConfigChange = (field: keyof FormConfig, value: number) => {
    setFormConfig(prev => ({
      ...prev,
      [field]: Math.max(0, Math.min(10, value))
    }));
  };

  const handleBuild = () => {
    const hasFields = Object.values(formConfig).some(val => val > 0);
    if (hasFields) {
      setIsFormBuilt(true);
    }
  };

  const handleReset = () => {
    setIsFormBuilt(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {!isFormBuilt ? (
          <FormBuilderCard
            formConfig={formConfig}
            onConfigChange={handleConfigChange}
            onBuild={handleBuild}
          />
        ) : (
          <GeneratedForm
            formConfig={formConfig}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}