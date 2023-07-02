import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/interfaces/Training';
import { TrainingService } from 'src/app/services/TrainingService';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent {
  training!: Training;

  constructor(private route: ActivatedRoute, private trainingService: TrainingService) { }

  ngOnInit(): void {
    const trainingId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchTrainingDetails(trainingId);
  }

  private fetchTrainingDetails(trainingId: number): void {
    this.trainingService.getTrainingById(trainingId).then((data:any)=>{
      this.training = data;
      console.log('Получено упражнение:',this.training);
    }).catch((err) => {
      console.log(`Ошибка в получении упражнения ${trainingId}:`, err)
    })
  }
}
