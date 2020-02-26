import { Component, OnInit } from '@angular/core';
import { Mood } from '../model/mood';
import { Page } from '../model/page';
import { MoodService } from '../service/mood-service.service';

@Component({
  selector: 'app-mood-list',
  templateUrl: './mood-list.component.html',
  styleUrls: ['./mood-list.component.less']
})
export class MoodListComponent implements OnInit {

//  moods: Page<Mood>;
  moods: Mood[];

  constructor(private moodService: MoodService) {
  }

  ngOnInit() {
    this.moodService.findAll().subscribe(data => {
      this.moods = data._embedded.items;
    });
  }
}
