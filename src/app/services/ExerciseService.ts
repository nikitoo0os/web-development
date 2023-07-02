import axios from 'axios';

export class ExerciseService {
  private baseUrl = 'http://localhost:8080/exercise/';

  getAllExercises() {
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

  getExerciseById(id: number) {
    return new Promise((resolve, reject) => {
      axios
        .get(`this.baseUrl/${id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  startExercise(exercise: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.baseUrl}start`, exercise)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  endExercise(exercise: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${this.baseUrl}end`, exercise)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  dropExercise(exercise: any) {
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
