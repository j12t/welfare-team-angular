import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mood } from '../model/mood';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class MoodService {
 
  private moodsUrl: string;
 
  constructor(private http: HttpClient) {
    this.moodsUrl = 'http://localhost:8081/welfare-team-api/v1/moods';
  }
 
  public findAll(): Observable<Mood[]> {
    return this.http.get<Mood[]>(this.moodsUrl);
  }
 
  public save(mood: Mood) {
    return this.http.post<Mood>(this.moodsUrl, mood);
  }
}