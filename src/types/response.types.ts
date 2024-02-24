export interface SuccessfullResponse<TData> {
  message: string;
  data: TData;
}

export interface ResigsterSuccessResponse {
  access_token: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
