  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { Athlete } from 'src/app/interfaces/Athlete';
  import { Exercise } from 'src/app/interfaces/Exercise';
  import { Training } from 'src/app/interfaces/Training';
  import { NewExerciseDTO } from 'src/app/interfaces/dto/NewExerciseDTO';
  import { AthleteService } from 'src/app/services/AthleteService';
  import { ExerciseService } from 'src/app/services/ExerciseService';
  import { TrainingService } from 'src/app/services/TrainingService';
  import { UserService } from 'src/app/services/UserService';

  @Component({
    selector: 'app-exercise-new',
    templateUrl: './exercise-new.component.html',
    styleUrls: ['./exercise-new.component.css']
  })
  export class ExerciseNewComponent implements OnInit{
    
    training!:Training;
    athlete!: Athlete;
    exercise:any = new Object();

    selectedTraining!: Exercise;
    isTrainingStarted: boolean = false;
    elapsedTime: number = 0;
    intervalId: any;

    idTraining!: number;

    dto: NewExerciseDTO = {
      'exercise': this.exercise,
      'athlete': this.athlete,
      'training': this.training 
    };

    constructor(
      private exerciseService: ExerciseService,
      private athleteService: AthleteService,
      private trainingService: TrainingService,
      private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.idTraining = +this.route.snapshot.paramMap.get('id')!;

      this.trainingService.getTrainingById(this.idTraining).then((data:any)=>{
        console.log('Найдено упражнение:', data);
        this.training = data;
      }).catch((err)=>{
        console.log('Не удалось найти упражнение');
      })

      const athleteId = +localStorage.getItem('id')!;

      this.athleteService.getAthleteById(athleteId).then((data:any)=>{
        this.athlete = data;
        console.log('athete:',this.athlete);
      })

    }

    onSubmit(): void {


    }

    startTraining() {

      this.dto.athlete = this.athlete;
      this.dto.training = this.training;
      console.log(this.athlete);
      console.log(this.exercise)
      this.exercise.elapsedTime = String(this.elapsedTime);
      this.exercise.athlete = this.athlete;
      this.exercise.isCompleted = false;
      this.exercise.training = this.training;
      this.exercise.startDate = '';
      this.dto.exercise = this.exercise;
      console.log('dto:',this.dto);
      this.exerciseService.startExercise(this.dto).then((data:any) => {
        console.log('Начата новая тренировка:',this.exercise);
        this.dto.exercise = data;
        this.isTrainingStarted = true;
        this.intervalId = setInterval(() => {
          this.elapsedTime++;
        }, 1000);

      }).catch((err) => {
        console.log('Ошибка в создании тренировки:',err);
      })


    }   

    finishTraining() {
      
      this.exerciseService.endExercise(this.dto).then((data)=>{
        console.log('Тренировка завершена!')
      })

      clearInterval(this.intervalId);
      this.isTrainingStarted = false;
      this.elapsedTime = 0;
    }

  }
