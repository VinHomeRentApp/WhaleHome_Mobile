import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import ApartmentClass from 'src/models/class/ApartmentClass.class';

const EndPoint = {
  getApartmentClasses: '/api/v1/apartmentclasses'
};

const apartmentApi = {
  getApartmentClass: () => {
    return httpClient.get<SuccessfulResponse<ApartmentClass[]>>(EndPoint.getApartmentClasses);
  }
};

export default apartmentApi;
