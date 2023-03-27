import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ShoeCare } from '../api/models';
import { ShoeCareService } from '../api/services';

@Component({
  selector: 'app-care-detail',
  templateUrl: './care-detail.component.html',
  styleUrls: ['./care-detail.component.css']
})
export class CareDetailComponent {

  care!: ShoeCare;

  id: any;

  constructor(private route: ActivatedRoute, private service: ShoeCareService, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    
    this.service.getShoeCareById$Response({ id: this.id }).subscribe(res => {
      this.care = res.body;      
    });
  }

  updateCare(){
    this.service.updateShoeCareById({ id: this.id, body: this.care }).subscribe(res => {
      this.care = res;

      this.service.getShoeCareById$Response({ id: this.id }).subscribe(res => {
        this.care = res.body;
      })
    })
  }

  deleteCare(){
    this.service.deleteShoeCareById({id: this.id}).subscribe();

    this.service.getShoeCareById({id: this.id}).subscribe(res => {
      this.care = res;
    });

    this.router.navigate(['/care']);
  }
}
