import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface AgentFormProps {
  labelText: string;
  inputName: string;
  type?: string;
}

const InputField: React.FC<AgentFormProps> = (props) => {
  const {
    labelText,
    inputName,
    type='text'
  } = props;

  return (
    <div className='mb-3'>
      <label className='form-label' htmlFor={inputName}>{labelText}</label>
      <Field className='form-control' type={type} id={inputName} name={inputName} />
      <ErrorMessage name={inputName} component='div' className='error-message' />
    </div>
  );
};

export default InputField;
