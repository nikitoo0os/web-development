import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/interfaces/Exercise';
import { ExerciseService } from 'src/app/services/ExerciseService';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit{

  exercises!: Exercise[];



  constructor(private exerciseService: ExerciseService){}

  ngOnInit(): void {
    this.getAllExercises();
  }
  


  getAllExercises(){
    this.exerciseService.getAllExercises().then((data: any) => {
      this.exercises = data;
      console.log(this.exercises);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
