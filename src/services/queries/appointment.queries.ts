import appointmentApis from '@services/apis/appointment.apis';
import { useQuery } from '@tanstack/react-query';

export const useGetAppointment = (userId: number) => {
  return useQuery({
    queryKey: ['appointments', userId],
    queryFn: () => appointmentApis.getAppointmentByUser(userId),
    staleTime: 3 * 60 * 1000
  });
};
