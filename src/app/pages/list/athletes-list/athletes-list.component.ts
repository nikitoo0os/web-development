import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/interfaces/Athlete';
import { AthleteService } from 'src/app/services/AthleteService';


@Component({
  selector: 'app-athletes-list',
  templateUrl: './athletes-list.component.html',
  styleUrls: ['./athletes-list.component.css']
})
export class AthletesListComponent implements OnInit
{
  athletes!: Athlete[];

  constructor(private athleteService: AthleteService){}

  ngOnInit(): void {
    this.getAllAthletes();
  }

  getAllAthletes(){
    this.athleteService.getAllAthletes().then((data: any) => {
      this.athletes = data;
      console.log(this.athletes);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
