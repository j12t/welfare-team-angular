import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoodListComponent } from './mood-list/mood-list.component';
import { MoodFormComponent } from './mood-form/mood-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'moods', component: MoodListComponent },
  { path: 'addMood', component: MoodFormComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
