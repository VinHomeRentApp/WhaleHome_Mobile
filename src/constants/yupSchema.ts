import * as yup from 'yup';

// name: string;
// cartNumber: string;
// releaseDate: string;

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

export type PaymentSchemaType = yup.InferType<typeof paymentSchema>;
