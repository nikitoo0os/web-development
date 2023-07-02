import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Athlete } from 'src/app/interfaces/Athlete';
import { AthleteService } from 'src/app/services/AthleteService';

@Component({
  selector: 'app-athlete-detail',
  templateUrl: './athlete-detail.component.html',
  styleUrls: ['./athlete-detail.component.css']
})
export class AthleteDetailComponent {
  athlete!: Athlete;

  constructor(private route: ActivatedRoute, private athleteService: AthleteService) { }

  ngOnInit(): void {
    const exerciseId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchExerciseDetails(exerciseId);
  }

  private fetchExerciseDetails(athleteId: number): void {
    this.athleteService.getAthleteById(athleteId).then((data:any)=>{
      this.athlete = data;
      console.log('Получено упражнение:',this.athlete);
    }).catch((err)=>{
      console.log(`Ошибка в получении упражнения ${athleteId}:`,err)
    })
  }
}
