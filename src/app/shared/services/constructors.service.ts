import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {

  constructor(private api: ApiService) { }

  getConstructorStandingsBySeason(season: string, round: string) {
    return this.api.get(`${season}/${round}/constructorStandings`);
  }

  getConstructorStandings(round: string = '1') {
    return this.getConstructorStandingsBySeason('current', round);
  }

}
