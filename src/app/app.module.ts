import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoodListComponent } from './mood-list/mood-list.component';
import { MoodFormComponent } from './mood-form/mood-form.component';
import { MoodService } from './service/mood-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MoodListComponent,
    MoodFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
