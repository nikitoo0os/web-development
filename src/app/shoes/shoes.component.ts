import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { catchError, of, tap } from 'rxjs';
import { Shoe } from '../api/models';
import { ShoesService } from '../api/services';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
})
export class ShoesComponent implements OnInit {
  shoes: Shoe[] = [];

  constructor(private service: ShoesService) {}

  ngOnInit(): void {
    this.service.getAllShoes().subscribe((_shoes) => {
      this.shoes = _shoes;
    });
  }
}
