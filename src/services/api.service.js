import axios from 'axios';
import { environment } from '../environments/environment';

const API_URL = environment.backEnd

export default class ApiService {
    /**
     * đăng ký tài khoản mới
     * @param {*} user 
     * @returns 
     */
    static async createUser(user) {
      const response = await axios.post(`${API_URL}/auth/register`, {
        username: user.username,
        password: user.password,
        fullName: user.fullName,
      });
      return response.data
    }
  
    // ...
}