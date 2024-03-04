import { SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import Area from 'src/models/class/Area.class';

const EndPoint = {
  getAllArea: '/api/v1/areas'
};

const areaApi = {
  getAllArea: () => {
    return httpClient.get<SuccessfulResponse<Area[]>>(EndPoint.getAllArea);
  }
};

export default areaApi;
