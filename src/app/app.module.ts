import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiModule } from './api/api.module';
import { AppRoutingModule } from './app-routing.module';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoeCareComponent } from './shoe-care/shoe-care.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';
import { CareDetailComponent } from './care-detail/care-detail.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule, InMemoryBackendConfig, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ShoesService } from './api/services';
import { MemoryDataService } from './memory-data.service';
import { CareMemoryDataService } from './care-memory-data.service';
import { CreateCareComponent } from './create-care/create-care.component';
import { CreateShoeComponent } from './create-shoe/create-shoe.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    ShoeCareComponent,
    ShoeDetailComponent,
    CareDetailComponent,
    CreateCareComponent,
    CreateShoeComponent,
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 500}),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [
    HttpClient,
    ShoesService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
