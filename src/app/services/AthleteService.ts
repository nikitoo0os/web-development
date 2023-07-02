import axios from 'axios';

export class AthleteService {
  private baseUrl = 'http://localhost:8080/athlete/';

  getAllAthletes() {
    return new Promise((resolve, reject) => {
      axios
        .get(this.baseUrl)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getAthleteById(id: number) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseUrl}${id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  createAthlete(athlete: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`this.baseUrl/create`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  dropAthlete(athlete: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`this.baseUrl/drop`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

}
