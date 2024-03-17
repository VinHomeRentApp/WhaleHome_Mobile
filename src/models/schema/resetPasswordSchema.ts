import * as yup from 'yup';

export type resetPasswordTypes = {
  password: string;
  confirmPassword: string;
};

export const resetPasswordSchema = yup.object().shape({
  password: yup.string().min(6, 'Password must be more than 6 characters').required('Password is required !'),
  confirmPassword: yup
    .string()
    .min(6, 'Confirm Password must be more than 6 characters')
    .required('Confirm Password is required!')
});

export const defaultFormResetPasswordValues: resetPasswordTypes = {
  confirmPassword: '',
  password: ''
};
