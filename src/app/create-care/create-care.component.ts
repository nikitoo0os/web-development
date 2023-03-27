import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewShoe, NewShoeCare } from '../api/models';
import { ShoeCareService, ShoesService } from '../api/services';

@Component({
  selector: 'app-create-care',
  templateUrl: './create-care.component.html',
  styleUrls: ['./create-care.component.css']
})
export class CreateCareComponent {
  constructor(private router: Router, private service: ShoeCareService) {}

  newShoeCare: NewShoeCare = { brand: '', name: '', price: 0 };
  id!: number;
  onSubmit() {
    this.service.addShoeCare({ body: this.newShoeCare }).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/care']);
  }
}
