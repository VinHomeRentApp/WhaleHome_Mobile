import { BANK_INFOR, CARD } from '@type/card.type';
import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';

const END_POINTS = {
  getPaymentById: 'api/v1/card/by-user/1',
  create_card: 'api/v1/card'
};

export type bodyNewCard = {
  name: string;
  cartNumber: string;
  releaseDate: string;
  bankCode: string;
  users: {
    id: number;
  };
};

const cardApis = {
  getPaymentByUserId: (userId: number) => {
    return httpClient.get<SuccessfulResponse<CARD[]>>(`api/v1/card/by-user/${userId}`);
  },
  getListBank: () => {
    return httpClient.get<SuccessfulResponse<BANK_INFOR[]>>('api/v1/bank');
  },
  createNewCardBank: (body: bodyNewCard) => {
    return httpClient.post<SuccessfulResponse<''>>(END_POINTS.create_card, body);
  }
};

export default cardApis;
