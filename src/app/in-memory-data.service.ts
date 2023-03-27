import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Shoe, ShoeCare } from './api/models';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

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
    
    return { shoes, care };
  }

  genId(shoes: Shoe[]): number {
    return shoes.length > 0
      ? Math.max(...shoes.map((shoe) => shoe.id!)) + 1
      : 11;
  }
}
