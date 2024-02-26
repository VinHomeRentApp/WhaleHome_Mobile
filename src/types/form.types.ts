export type defaultFormSignIn = {
  email: string;
  password: string;
};

export const defaultFormSignInValue = {
  email: '',
  password: ''
};

export type FormSignUpData = {
  email: string;
  password: string;
  verify_password: string;
  fullName: string;
  gender: string;
  phone: string;
  dateOfBirth: string;
  address: string;
};
