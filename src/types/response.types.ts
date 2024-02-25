export interface SuccessfulResponse<TData> {
  message: string;
  data: TData;
}

export interface RegisterSuccessResponse {
  access_token: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface PaginationResponse<T> {
  currentPage: number;
  totalPage: number;
  listResult: T;
}
