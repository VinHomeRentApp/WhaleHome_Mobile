import { Bill } from '@type/bill.type';
import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';

const end_points = {
  get_upcoming_bill: '/api/v1/payment/get-upcoming-payment/',
  get_list_all: '/api/v1/payment/get-all-payment/',
  get_unpaid_bill: '/api/v1/payment/get-unpaid-payment/'
};

export type BodyBill = {
  userId: number;
  month: number;
  year: number;
};

export const billApis = {
  getUpcomingInMonth: (body: BodyBill) => {
    return httpClient.get<SuccessfulResponse<Bill[]>>(`${end_points.get_upcoming_bill}${body.userId}`, {
      params: {
        month: body.month,
        year: body.year
      }
    });
  },
  getAllBillByUserId: (userId: number) => {
    return httpClient.get<SuccessfulResponse<Bill[]>>(`${end_points.get_list_all}${userId}`);
  },
  getAllBillUnpaid: (userId: number) => {
    return httpClient.get<SuccessfulResponse<Bill[]>>(`${end_points.get_unpaid_bill}${userId}`);
  }
};
