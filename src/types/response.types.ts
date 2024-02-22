export interface SuccessfullResponse<TData> {
  message: string;
  object: TData;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
