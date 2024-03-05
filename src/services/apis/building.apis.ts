import { getBuildingWithAreaParams, getWithPagination } from '@type/post.types';
import { PaginationResponse, SuccessfulResponse } from '@type/response.types';
import httpClient from '@utils/httpClient';
import Building from 'src/models/class/Building.class';

const EndPoint = {
  getAllBuilding: '/api/v1/buildings',
  getBuildingPagination: '/api/v1/buildings/get-page',
  getBuildingByArea: '/api/v1/buildings/get-by-are'
};

const buildingApi = {
  getAllBuilding: () => {
    return httpClient.get<SuccessfulResponse<Building[]>>(EndPoint.getAllBuilding);
  },
  getBuildingPagination: ({ page, field, size }: getWithPagination) => {
    const currentPage = page || 1;
    const currentSize = size || 3;
    const currentField = field || 'title';
    return httpClient.get<SuccessfulResponse<PaginationResponse<Building[]>>>(
      `${EndPoint.getBuildingPagination}/${currentPage}?sizePage=${currentSize}&field=${currentField}`
    );
  },
  getBuildingWithArea: ({ areaId, page, size, field }: getBuildingWithAreaParams) => {
    const currentPage = page || 1;
    const currentSize = size || 3;
    const currentField = field || 'name';
    return httpClient.get<SuccessfulResponse<PaginationResponse<Building[]>>>(
      `${EndPoint.getBuildingByArea}/${areaId}?currentPage=${currentPage}&sizePage=${currentSize}&field=${currentField}`
    );
  }
};

export default buildingApi;
