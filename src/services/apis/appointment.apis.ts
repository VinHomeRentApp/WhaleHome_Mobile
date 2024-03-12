import { Appointment } from '@type/appointment.type';
import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';

const end_point = {
  get_appointment: '/api/v1/appointments/get-by-userid'
};

const appointmentApis = {
  getAppointmentByUser: (userId: number) => {
    return httpClient.get<SuccessfulResponse<Appointment[]>>(`${end_point.get_appointment}/${userId}`);
  }
};

export default appointmentApis;
