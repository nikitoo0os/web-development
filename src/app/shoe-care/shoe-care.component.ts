import { Component } from '@angular/core';
import { ShoeCare } from '../api/models';
import { ShoeCareService } from '../api/services';

@Component({
  selector: 'app-shoe-care',
  templateUrl: './shoe-care.component.html',
  styleUrls: ['./shoe-care.component.css']
})
export class ShoeCareComponent {
  cares: ShoeCare[] = [];

  constructor(private service: ShoeCareService) {}

  ngOnInit(): void {
    this.service.getAllShoeCare().subscribe((_cares) => {
      this.cares = _cares;
      console.log(_cares);
    });
  }


}
