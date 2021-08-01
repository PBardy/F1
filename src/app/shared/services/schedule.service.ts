import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LastRoundResponse, Season, SeasonsResponse } from 'src/app/definitions';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  seasons: BehaviorSubject<Season[]> = new BehaviorSubject<Season[]>([]);
  lastRound: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private api: ApiService) {
    this.populateSeasons();
    this.populateLastRound();
  }

  private populateSeasons() {
    this.api.get<SeasonsResponse>('seasons', {
      params: new HttpParams().set('limit', 100),
    })
    .subscribe((response: any) => {
      response = response as SeasonsResponse;
      this.seasons.next(response.MRData.SeasonTable.Seasons);
    });
  }

  private populateLastRound() {
    this.api.get('current/last/results').subscribe((response: any) => {
      response = response as LastRoundResponse;
      this.lastRound.next(response.MRData.RaceTable);
    });
  }

  getSeason(season: string) {
    return this.api.get(season);
  }

  getLatestEvents() {
    return this.api.get('current');
  }

}
