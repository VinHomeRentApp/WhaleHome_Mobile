export interface SuccessfullResponse<TData> {
  message: string;
  data: TData;
}

export interface ResigsterSuccessResponse {
  access_token: string;
}
