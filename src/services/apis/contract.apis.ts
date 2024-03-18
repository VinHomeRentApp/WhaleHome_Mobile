import { ContractDetail, ListContract } from '@type/contract.type';
import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';

const END_POINTS = {
  get_list_contract: 'api/v1/contracts/getListContract/',
  get_detail_contract: 'api/v1/contracts/getDetailContract/',
  downloadFileContract: 'api/v1/contracts/download/'
};

const contractApis = {
  getListContractByUserId: (userId: number) => {
    return httpClient.get<SuccessfulResponse<ListContract>>(`${END_POINTS.get_list_contract}${userId}`);
  },
  getDetailContractByContractId: (contractId: number) => {
    return httpClient.get<SuccessfulResponse<ContractDetail>>(`${END_POINTS.get_detail_contract}${contractId}`);
  },
  downloadFile: (contractId: number) => {
    return httpClient.get(`${END_POINTS.downloadFileContract}${contractId}`);
  }
};

export default contractApis;
