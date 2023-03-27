import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewShoe, Shoe } from '../api/models';
import { ShoesService } from '../api/services';

@Component({
  selector: 'app-create-shoe',
  templateUrl: './create-shoe.component.html',
  styleUrls: ['./create-shoe.component.css'],
})
export class CreateShoeComponent {
  constructor(private router: Router, private service: ShoesService) {}

  newShoe: NewShoe = { brand: '', name: '', price: 0, size: '' };
  id!: number;
  onSubmit() {
    this.service.addShoe({ body: this.newShoe }).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/shoes']);
  }
}
