import * as yup from 'yup';

export interface FormDataUpdate {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  identityCard?: string | null;
  identityCardDateProvide?: string | null;
  identityCardAddressProvide?: string | null;
}

const updateUserProfileSchema = yup.object().shape({
  fullName: yup.string().required('Username is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Invalid phone number'),
  email: yup.string().email('Invalid email').required('Email is required'),
  gender: yup.string().required('Gender is required'),
  dateOfBirth: yup.string().required('Date Of Birth is required'),
  address: yup.string().required('Address is required'),
  identityCard: yup.string().nullable(),
  identityCardDateProvide: yup.string().nullable(),
  identityCardAddressProvide: yup.string().nullable()
});

export default updateUserProfileSchema;
