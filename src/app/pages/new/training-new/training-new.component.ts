import { Component } from '@angular/core';
import { Training } from 'src/app/interfaces/Training';
import { TrainingService } from 'src/app/services/TrainingService';

@Component({
  selector: 'app-training-new',
  templateUrl: './training-new.component.html',
  styleUrls: ['./training-new.component.css']
})
export class TrainingNewComponent {

  training!: Training;
  constructor(private trainingService: TrainingService) { }

  onSubmit(): void {
    this.trainingService.createTraining(this.training).then((data) => {
      console.log('Новое упражнение создано: ', data);
    }).catch((err) => {
      console.log('Ошибка в создании упражнения: ', err);
    })
  }
}
