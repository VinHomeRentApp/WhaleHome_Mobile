import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import Building from 'src/models/class/Building.class';

const EndPoint = {
  getAllBuilding: '/api/v1/buildings'
};

const buildingApi = {
  getAllBuilding: () => {
    return httpClient.get<SuccessfulResponse<Building[]>>(EndPoint.getAllBuilding);
  }
};

export default buildingApi;
