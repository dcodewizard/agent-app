import * as Yup from 'yup';

export const agentValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  agentLicense: Yup.string().required('Agent License is required'),
  address: Yup.string().required('Address is required'),
  practiceAreas: Yup.string().required('Practice Areas is required'),
  aboutMe: Yup.string().required('About Me is required'),
  photoUrl: Yup.string().optional(),
});
