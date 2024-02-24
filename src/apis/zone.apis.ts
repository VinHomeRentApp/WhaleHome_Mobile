import { SuccessfullResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import Zone from 'src/models/class/Zone.class';

const EndPoint = {
  getAllZones: '/api/v1/zone'
};

const zoneApi = {
  getAllZones: () => {
    return httpClient.get<SuccessfullResponse<Zone[]>>(EndPoint.getAllZones);
  }
};

export default zoneApi;
