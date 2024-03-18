import * as yup from 'yup';

// name: string;
// cartNumber: string;
// releaseDate: string;

//  email: string;
//  password: string;
//  verify_password: string;
//  fullName: string;
//  gender: string;
//  phone: string;
//  dateOfBirth: string;
//  address: string;

export const signUpSchema = yup.object({
  email: yup.string().email('Email không đúng định dạng').required('Vui lòng điền email'),
  fullName: yup.string().required(),
  gender: yup.string().required(),
  phone: yup.string().required('Vui lòng nhập số điện thoại'),
  address: yup.string().required(),
  password: yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  verify_password: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu')
    .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không khớp'),
  dateOfBirth: yup.string().required()
});

export const paymentSchema = yup.object({
  name: yup
    .string()
    .required('Vui lòng nhập thông tin chủ thẻ')
    .matches(/^[A-Z ]+$/, 'Vui lòng chỉ nhập chữ cái viết hoa'),
  cartNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Vui lòng chỉ nhập số')
    .required('Vui lòng nhập thông tin số thẻ'),
  releaseDate: yup.string().required('Vui lòng nhập')
});

export type SignUpSchema = yup.InferType<typeof signUpSchema>;
export type PaymentSchemaType = yup.InferType<typeof paymentSchema>;
