import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { AddAgentFormProps, FormValues } from 'types/Agent';
import { Formik, Form } from 'formik';
import InputField from 'components/Agents/Form/InputField';
import { createAgent } from 'store/actions/agent/createAgent';
import {agentValidationSchema} from 'helpers/agentValidationSchema'
import { toast } from 'react-toastify';

const AddAgentForm: React.FC<AddAgentFormProps> = ({ setShowModal, setLoader }) => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    agentLicense: '',
    address: '',
    practiceAreas: [],
    aboutMe: '',
    photoUrl: '',
  };

  const dispatch: Dispatch<any> = useDispatch();

  const handleSubmit = (values: any) => {
    setLoader(true);
    const payload = { ...values };
    if (payload.photoUrl === '') {
      delete payload.photoUrl;
    }
    const practices = payload.practiceAreas.split(', ');
    dispatch(createAgent(
      {...payload, practiceAreas: practices},
      setShowModal,
      setLoader,
      toast
    ));
  };

  return (
    <div className='container'>
      <h1>Agent Form</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={agentValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <InputField labelText='First Name' inputName='firstName' />

          <InputField labelText='Last Name' inputName='lastName' />

          <InputField labelText='Agent License' inputName='agentLicense' />

          <InputField labelText='Address' inputName='address' />

          <InputField labelText='Practice Areas' inputName='practiceAreas' />

          <InputField
            labelText='About Me'
            inputName='aboutMe'
            type='textarea'
          />

          <InputField labelText='Picture URL' inputName='photoUrl' />

          <button className='btn btn-primary' type='submit'>
            Add Agent
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddAgentForm;
