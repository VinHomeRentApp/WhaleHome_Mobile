import { BodyBill, billApis } from '@services/apis/bill.apis';
import { useQuery } from '@tanstack/react-query';

export const useGetUpcomingBill = (body: BodyBill) => {
  return useQuery({
    queryKey: ['billUpcoming', body.userId],
    queryFn: () => billApis.getUpcomingInMonth(body)
  });
};

export const useGetAllBIll = (userId: number) => {
  return useQuery({
    queryKey: ['listBill', userId],
    queryFn: () => billApis.getAllBillByUserId(userId)
  });
};

export const useGetUnpaidBill = (userId: number) => {
  return useQuery({
    queryKey: ['listBillUnpaid', userId],
    queryFn: () => billApis.getAllBillUnpaid(userId)
  });
};
