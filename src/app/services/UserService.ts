import axios from 'axios';

export class UserService {
  private baseUrl = 'http://localhost:8080/user';

  loginUser(formData: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.baseUrl}/login`, formData)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
