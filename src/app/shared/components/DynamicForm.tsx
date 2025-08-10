import React, { useState } from 'react';
import { IFieldConfig } from '../interface/IFieldConfig'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Upload, X } from 'lucide-react';

interface DynamicFormProps {
  fields: IFieldConfig[];
  initialValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
  submitText?: string;
  className?: string;
  renderSubmitButton?: (props: { submitText: string }) => React.ReactNode;
  submitButtonClassName?: string;
}

const validate = (fields: IFieldConfig[], values: Record<string, any>) => {
  const errors: Record<string, string> = {};
  for (const field of fields) {
    const value = values[field.name];
    if (field.required && (!value || value === '')) {
      errors[field.name] = 'Este campo es obligatorio';
    }
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors[field.name] = 'Correo inválido';
      }
    }
    if (field.maxLength && value && value.length > field.maxLength) {
      errors[field.name] = `Máximo ${field.maxLength} caracteres`;
    }
    if (field.minLength && value && value.length < field.minLength) {
      errors[field.name] = `Mínimo ${field.minLength} caracteres`;
    }
  }
  return errors;
};

const renderField = (
  field: IFieldConfig,
  value: any,
  error: string | undefined,
  touched: boolean | undefined,
  handleChange: React.ChangeEventHandler<any>,
  handleBlur: React.FocusEventHandler<any>,
  passwordVisibility: Record<string, boolean>,
  togglePasswordVisibility: (name: string) => void,
  handleFileSelect?: (fieldName: string, file: File, preview: string) => void,
  openFileModal?: (fieldName: string) => void,
  handleFileClear?: (fieldName: string) => void
) => {
  const baseClass = `w-full px-6 py-3 rounded-xl border bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-light transition-all duration-200 ${error && touched ? 'border-red-500' : 'border-border'}`;
  
  switch (field.type) {
    case 'file':
      return (
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => openFileModal?.(field.name)}
            className="w-full px-6 py-3 rounded-xl border-2 border-dashed border-border hover:border-orange-primary hover:bg-orange-50 transition-all duration-200 flex items-center justify-center gap-2 text-text-secondary hover:text-text-primary"
          >
            <Upload className="h-5 w-5" />
            <span>Seleccionar archivo</span>
          </button>
          {value && (
            <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
              {field.fileType?.startsWith('image/') && value.preview ? (
                <img
                  src={value.preview}
                  alt="preview"
                  className="h-12 w-12 rounded object-cover"
                />
              ) : (
                <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center">
                  <Upload className="h-6 w-6 text-gray-500" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">
                  {value.name}
                </p>
                <p className="text-xs text-text-secondary">
                  {(value.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleFileClear?.(field.name)}
                className="p-1 hover:bg-red-100 rounded text-red-500"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      );
    case 'select':
      return (
        <select
          id={field.name}
          name={field.name}
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          className={baseClass}
        >
          <option value="">Selecciona...</option>
          {(Array.isArray(field.options) ? field.options : []).map(opt =>
            typeof opt === 'string'
              ? <option key={opt} value={opt}>{opt}</option>
              : <option key={opt.value} value={opt.value}>{opt.label}</option>
          )}
        </select>
      );
    case 'textarea':
      return (
        <textarea
          id={field.name}
          name={field.name}
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={field.placeholder}
          className={baseClass}
        />
      );
    case 'password':
      return (
        <div className="relative">
          <input
            id={field.name}
            name={field.name}
            type={passwordVisibility[field.name] ? 'text' : 'password'}
            value={value || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            minLength={field.minLength}
            className={`${baseClass} pr-10`}
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility(field.name)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-text-secondary hover:text-text-primary"
          >
            {passwordVisibility[field.name] ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>
      );
    default:
      return (
        <input
          id={field.name}
          name={field.name}
          type={field.type}
          value={value || ''}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          minLength={field.minLength}
          className={baseClass}
        />
      );
  }
};

const DynamicForm: React.FC<DynamicFormProps> = ({
  fields, initialValues, onSubmit, submitText = 'Guardar', className = '', renderSubmitButton
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [passwordVisibility, setPasswordVisibility] = useState<Record<string, boolean>>({});
  const [fileModalOpen, setFileModalOpen] = useState(false);
  const [currentFileField, setCurrentFileField] = useState<string>('');

  const togglePasswordVisibility = (fieldName: string) => {
    setPasswordVisibility(prev => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleFileClear = (fieldName: string) => {
    setValues(prev => ({ ...prev, [fieldName]: null }));
    setTouched(prev => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (e: React.FocusEvent<any>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(fields, { ...values, [name]: values[name] }));
  };

  const handleFileSelect = (fieldName: string, file: File, preview: string) => {
    setValues(prev => ({
      ...prev,
      [fieldName]: {
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        preview: file.type.startsWith('image/') ? preview : null
      }
    }));
    setTouched(prev => ({ ...prev, [fieldName]: true }));
  };

  const openFileModal = (fieldName: string) => {
    setCurrentFileField(fieldName);
    setFileModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(fields, values);
    setErrors(newErrors);
    setTouched(Object.fromEntries(fields.map(f => [f.name, true])));
    if (Object.keys(newErrors).length === 0) {
      onSubmit(values);
    }
  };

  const currentFileFieldConfig = fields.find(f => f.name === currentFileField);

  return (
    <>
      <form onSubmit={handleSubmit} className={`space-y-6 p-6 ${className}`} autoComplete="off">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map(field => (
            <div
              key={field.name}
              className={`${field.colSpan === 2 ? 'md:col-span-2' : ''}`}
            >
              <label htmlFor={field.name} className="block text-sm font-medium text-text-primary mb-2">
                {field.label}{field.required && <span className="text-red-500">*</span>}
              </label>
              {renderField(
                field,
                values[field.name],
                errors[field.name],
                touched[field.name],
                handleChange,
                handleBlur,
                passwordVisibility,
                togglePasswordVisibility,
                handleFileSelect,
                openFileModal,
                handleFileClear
              )}
              {errors[field.name] && touched[field.name] && (
                <span className="text-xs text-red-500 mt-1">{errors[field.name]}</span>
              )}
            </div>
          ))}
        </div>
        {renderSubmitButton ? (
          renderSubmitButton({ submitText })
        ) : (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-primary to-red-primary hover:from-orange-600 hover:to-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              {submitText}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default DynamicForm; 