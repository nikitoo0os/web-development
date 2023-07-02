import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseListComponent } from './pages/list/exercise-list/exercise-list.component';
import { TrainingsListComponent } from './pages/list/trainings-list/trainings-list.component';
import { AthletesListComponent } from './pages/list/athletes-list/athletes-list.component';
import { AthleteDetailComponent } from './pages/detail/athlete-detail/athlete-detail.component';
import { ExerciseDetailComponent } from './pages/detail/exercise-detail/exercise-detail.component';
import { ExerciseNewComponent } from './pages/new/exercise-new/exercise-new.component';
import { TrainingDetailComponent } from './pages/detail/training-detail/training-detail.component';
import { TrainingNewComponent } from './pages/new/training-new/training-new.component';
import { AthleteNewComponent } from './pages/new/athlete-new/athlete-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseService } from './services/ExerciseService';
import { TrainingService } from './services/TrainingService';
import { AthleteService } from './services/AthleteService';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { UserService } from './services/UserService';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    ExerciseDetailComponent,
    ExerciseNewComponent,

    TrainingsListComponent,
    TrainingDetailComponent,
    TrainingNewComponent,

    AthletesListComponent,
    AthleteDetailComponent,
    AthleteNewComponent,
    LoginFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ExerciseService, TrainingService, AthleteService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
