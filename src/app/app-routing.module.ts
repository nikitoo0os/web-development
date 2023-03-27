import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CareDetailComponent } from "./care-detail/care-detail.component";
import { CreateCareComponent } from "./create-care/create-care.component";
import { CreateShoeComponent } from "./create-shoe/create-shoe.component";
import { ShoeCareComponent } from "./shoe-care/shoe-care.component";
import { ShoeDetailComponent } from "./shoe-detail/shoe-detail.component";
import { ShoesComponent } from "./shoes/shoes.component";

const routes: Routes = [
    {path: 'shoes', component: ShoesComponent},
    {path: 'shoes/:id', component: ShoeDetailComponent},
    {path: 'care', component: ShoeCareComponent},
    {path: 'care/:id', component: CareDetailComponent},
    {path: 'newShoe', component: CreateShoeComponent},
    {path: 'newCare', component: CreateCareComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}