import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Shoe } from './api/models';

@Injectable({
  providedIn: 'root'
})
export class MemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const shoes: Shoe[] = [
      {
        id: 1,
        name: 'Classic Leather Make It Yours',
        brand: 'Reebok',
        price: 123,
        size: '43',
      },
      {
        id: 2,
        name: 'Air Force 1',
        brand: 'Nike',
        price: 150,
        size: '42',
      },
      {
        id: 3,
        name: 'Ultraboost 21',
        brand: 'Adidas',
        price: 180,
        size: '41',
      },
      {
        id: 4,
        name: 'Gel-Nimbus 23',
        brand: 'ASICS',
        price: 160,
        size: '44',
      },
      {
        id: 5,
        name: 'Gel-Kayano 28',
        brand: 'ASICS',
        price: 180,
        size: '43',
      },
      {
        id: 6,
        name: 'Gel-Cumulus 23',
        brand: 'ASICS',
        price: 120,
        size: '40',
      },
      {
        id: 7,
        name: 'Air Zoom Pegasus 38',
        brand: 'Nike',
        price: 130,
        size: '39',
      },
      {
        id: 8,
        name: 'Fresh Foam 1080v11',
        brand: 'New Balance',
        price: 140,
        size: '42',
      },
      {
        id: 9,
        name: 'FuelCell Propel v3',
        brand: 'New Balance',
        price: 120,
        size: '41',
      },
      {
        id: 10,
        name: 'GT-2000 10',
        brand: 'ASICS',
        price: 130,
        size: '42',
      },
    ];
    return { shoes };
  }

  genId(shoes: Shoe[]): number {
    return shoes.length > 0
      ? Math.max(...shoes.map((shoe) => shoe.id!)) + 1
      : 11;
  }
}
