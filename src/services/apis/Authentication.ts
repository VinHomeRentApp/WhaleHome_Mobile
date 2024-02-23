import axios, { AxiosResponse } from 'axios';

const SIGN_IN_URL = 'https://whalehome.up.railway.app/api/v1/auth/authenticate';

export async function signIn(email: string, password: string): Promise<AxiosResponse<{ access_token: string }>> {
  return axios.post<{ access_token: string }>(SIGN_IN_URL, { email, password });
}
