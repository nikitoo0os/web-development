import { Component } from '@angular/core';
import { Athlete } from 'src/app/interfaces/Athlete';
import { AthleteService } from 'src/app/services/AthleteService';

@Component({
  selector: 'app-athlete-new',
  templateUrl: './athlete-new.component.html',
  styleUrls: ['./athlete-new.component.css']
})
export class AthleteNewComponent {

  athlete!: Athlete;

  constructor(private athleteService: AthleteService) { }
  onSubmit(): void {
      this.athleteService.createAthlete(this.athlete).then((data) => {
        console.log('Новый спортсмен создан: ', this.athlete);
      }).catch((err) => {
        console.log('Ошибка в создании спортсмена:',err);
      })
  }
}
