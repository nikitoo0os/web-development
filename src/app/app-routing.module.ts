import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './pages/list/exercise-list/exercise-list.component';
import { TrainingsListComponent } from './pages/list/trainings-list/trainings-list.component';
import { AthletesListComponent } from './pages/list/athletes-list/athletes-list.component';
import { AthleteNewComponent } from './pages/new/athlete-new/athlete-new.component';
import { ExerciseNewComponent } from './pages/new/exercise-new/exercise-new.component';
import { TrainingNewComponent } from './pages/new/training-new/training-new.component';
import { TrainingDetailComponent } from './pages/detail/training-detail/training-detail.component';
import { AthleteDetailComponent } from './pages/detail/athlete-detail/athlete-detail.component';
import { ExerciseDetailComponent } from './pages/detail/exercise-detail/exercise-detail.component';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';

const routes: Routes = [
  {path: '', component: ExerciseListComponent},

  {path: 'exercise', component: ExerciseListComponent},
  {path: 'exercise:id', component: ExerciseDetailComponent},
  {path: 'exercise/new/:id', component: ExerciseNewComponent},

  {path: 'training', component: TrainingsListComponent},
  {path: 'training:id', component: TrainingDetailComponent},
  {path: 'training/new/:id', component: TrainingNewComponent},

  {path: 'athlete', component: AthletesListComponent},
  {path: 'athlete:id', component: AthleteDetailComponent},
  {path: 'athlete/new', component: AthleteNewComponent},

  {path: 'login', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
