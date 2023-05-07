import axios from 'axios';
import { environment } from '../environments/environment';

const API_URL = environment.backEnd

export default class AuthenticationService {
  static async login(username, password) {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password
    });

    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }
spét
  static logout() {
    localStorage.removeItem('user');
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}