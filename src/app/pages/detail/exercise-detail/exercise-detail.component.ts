import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from 'src/app/interfaces/Exercise';
import { ExerciseService } from 'src/app/services/ExerciseService';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent {
  exercise!: Exercise;

  constructor(private route: ActivatedRoute, private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    const exerciseId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchExerciseDetails(exerciseId);
  }

  private fetchExerciseDetails(exerciseId: number): void {
    this.exerciseService.getExerciseById(exerciseId).then((data:any)=>{
      this.exercise = data;
      console.log('Получено упражнение:',this.exercise);
    }).catch((err)=>{
      console.log(`Ошибка в получении упражнения ${exerciseId}:`,err)
    })
  }
}
