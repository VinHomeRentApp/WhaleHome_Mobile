import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiResponse } from '@type/response.types';
import axios from 'axios';
import { Alert } from 'react-native';

class Authentication {
  public async signIn(email: string, password: string): Promise<string> {
    try {
      const response = await axios.post<ApiResponse<{ access_token: string }>>(
        'https://whalehome.up.railway.app/api/v1/auth/authenticate',
        {
          email,
          password
        }
      );
      if (response && response.data) {
        const idToken = response.data.data.access_token;
        // Store the ID token in AsyncStorage
        await AsyncStorage.setItem('authToken', idToken);
        return idToken; // Return the token for any further client-side use
      } else {
        throw new Error('Empty response data');
      }
    } catch (error: any) {
      Alert.alert('SignIn Error', error.message);
      throw error;
    }
  }
}

const authentication = new Authentication();

export default authentication;
