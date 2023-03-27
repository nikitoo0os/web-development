import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ShoeCare } from './api/models';

@Injectable({
  providedIn: 'root'
})
export class CareMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const care: ShoeCare[] = [
      {
        id: 1,
        name: 'Shoe polish',
        brand: 'Kiwi',
        price: 5.99
      },
      {
        id: 2,
        name: 'Suede and nubuck cleaner',
        brand: 'Angelus',
        price: 9.99
      },
      {
        id: 3,
        name: 'Leather conditioner',
        brand: 'Fiebing\'s',
        price: 7.99
      },
      {
        id: 4,
        name: 'Waterproof spray',
        brand: 'Nikwax',
        price: 12.99
      },
      {
        id: 5,
        name: 'Sneaker cleaner',
        brand: 'Jason Markk',
        price: 15.99
      },
      {
        id: 6,
        name: 'Leather balm',
        brand: 'Saphir',
        price: 19.99
      },
      {
        id: 7,
        name: 'Shoe deodorizer',
        brand: 'FootMatters',
        price: 8.99
      },
      {
        id: 8,
        name: 'Shoe stretcher',
        brand: 'Woodlore',
        price: 25.99
      },
      {
        id: 9,
        name: 'Boot oil',
        brand: 'Red Wing',
        price: 13.99
      },
      {
        id: 10,
        name: 'Suede eraser',
        brand: 'Saphir',
        price: 4.99
      }
    ];
  
    return { care };
  }
  
}
