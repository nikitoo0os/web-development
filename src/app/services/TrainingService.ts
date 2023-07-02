import axios from 'axios';

export class TrainingService {
  private baseUrl = 'http://localhost:8080/training/';

  getAllTrainings() {
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

  getTrainingById(id: number) {
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

  createTraining(training: any) {
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

  dropTraining(training: any) {
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
