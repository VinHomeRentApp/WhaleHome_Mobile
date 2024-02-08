import * as Yup from 'yup';

const formSignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('password is required!')
});

export default formSignInSchema;
