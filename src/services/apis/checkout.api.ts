import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';

type PaypalResponse = number;

const end_point = {
  byPaypal: '/api/v1/paypal/pay',
  byVNPay: '/api/v1/vnpay/payment'
};

export type BODY_PAYPAL = {
  amount: number;
  paymentId: string;
};

type BODY_VNPAY = {
  paymentId: string;
  price: number;
  bankCode: string;
};

export const checkoutMethod = {
  checkoutByPaypal: (body: BODY_PAYPAL) => {
    return httpClient.get<SuccessfulResponse<string>>(end_point.byPaypal, {
      params: {
        amount: body.amount,
        paymentId: body.paymentId
      }
    });
  },
  checkoutByVNPay: (body: BODY_VNPAY) => {
    return httpClient.get<SuccessfulResponse<string>>(end_point.byVNPay, {
      params: {
        price: body.price,
        paymentId: body.paymentId,
        bankCode: body.bankCode
      }
    });
  }
};
