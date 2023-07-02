import { Component } from '@angular/core';
import { Training } from 'src/app/interfaces/Training';
import { TrainingService } from 'src/app/services/TrainingService';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.css'],
})
export class TrainingsListComponent {
  trainings!: Training[];
  user: any;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
    console.log('user:', this.user);
    this.trainingService
      .getAllTrainings()
      .then((data: any) => {
        console.log('Успешно получены упражнения', data);
        this.trainings = data;
      })
      .catch((err) => {
        console.log('Ошибка в получении упражнений', err);
      });
  }
}
