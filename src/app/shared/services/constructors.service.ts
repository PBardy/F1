import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConstructorsService {

  constructor(private api: ApiService) { }

  get options() {
    return { params: new HttpParams().set('limit', 300) };
  }

  getConstructorBySeason(season: string, round: string) {
    return this.api.get(`${season}/${round}/constructors`);
  }

  getConstructorsBySeason(season: string) {
    return (season === 'all') ? this.api.get('constructors', this.options) : this.api.get(`${season}/constructors`);
  }

  getConstructorStandingsBySeason(season: string, round: string) {
    return this.api.get(`${season}/${round}/constructorStandings`);
  }

  getConstructorStandings(round: string = '1') {
    return this.getConstructorStandingsBySeason('current', round);
  }

}
