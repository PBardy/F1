import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private api: ApiService) { }

  getRaceResultsBySeason(season: string, round: string) {
    return this.api.get(`${season}/${round}/results`);
  } 

  getLastRaceResults() {
    return this.getRaceResultsBySeason('current', 'last');
  }

}
