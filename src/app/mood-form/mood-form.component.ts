import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoodService } from '../service/mood-service.service';
import { Mood } from '../model/mood';
 
@Component({
  selector: 'app-mood-form',
  templateUrl: './mood-form.component.html',
  styleUrls: ['./mood-form.component.less']
})
export class MoodFormComponent {
 
  mood: Mood;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private moodService: MoodService) {
    this.mood = new Mood();
  }
 
  onSubmit() {
    this.moodService.save(this.mood).subscribe(result => this.gotoMoodList());
  }
 
  gotoMoodList() {
    this.router.navigate(['/moods']);
  }
}