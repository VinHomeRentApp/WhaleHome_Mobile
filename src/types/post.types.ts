export interface getWithPagination {
  page: number;
  size: number;
  field?: string;
}

export interface searchPostsParamsTypes {
  page: number;
  size: number;
  field?: string;
  title?: string;
}

export interface getBuildingWithAreaParams extends getWithPagination {
  areaId: number;
}
