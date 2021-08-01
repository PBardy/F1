import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private api: ApiService) { }

  get currentSeason(): string {
    return new Date().getFullYear().toString();
  }

  getDriversByYear(year: string) {
    
  }

  getDriversFromCurrentSeason() {
    return this.getDriversByYear(this.currentSeason);
  }

  getDriverStandingsBySeason(year: string, round: string) {
    return this.api.get(`${year}/${round}/driverStandings`);
  }

}
