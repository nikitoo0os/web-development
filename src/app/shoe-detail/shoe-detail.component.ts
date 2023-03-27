import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoe } from '../api/models';
import { ShoesService } from '../api/services';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent{

  constructor(private service: ShoesService, private route: ActivatedRoute, private router: Router){}

  shoe!: Shoe;
  id: any;

  ngOnInit(): void{
    this.id = +this.route.snapshot.paramMap.get('id')!;

    console.log(this.id);
    
    this.service.getShoeById({id: this.id}).subscribe(res => {
      this.shoe = res;
      console.log(res);
      
    })
  }

  updateShoe(){
    this.service.updateShoeById({ id: this.id, body: this.shoe }).subscribe(res => {
      this.shoe = res;

      this.service.getShoeById$Response({ id: this.id }).subscribe(res => {
        this.shoe = res.body;
      })
    })
  }

  deleteShoe(){
    this.service.deleteShoeById({id: this.id}).subscribe();

    this.service.getShoeById({id: this.id}).subscribe(res => {
      this.shoe = res;
    });

    this.router.navigate(['/shoes']);
  }
}
