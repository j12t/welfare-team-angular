import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoodListComponent } from './mood-list/mood-list.component';
import { MoodFormComponent } from './mood-form/mood-form.component';
 
const routes: Routes = [
  { path: 'moods', component: MoodListComponent },
  { path: 'addMood', component: MoodFormComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }