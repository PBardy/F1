import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private api: ApiService) { }

  get currentYear(): string {
    return new Date().getFullYear().toString();
  }

  getDriversByYear(year: string) {
    
  }

  getDriversFromCurrentYear() {
    return this.getDriversByYear(this.currentYear);
  }

  getDriverStandingsByYear(year: string, round: number) {
    return this.api.get(`${year}/${round}/driverStandings`);
  }

  getDriverStandingsForCurrentYear(round: number = 1) {
    return this.getDriverStandingsByYear(this.currentYear, round);
  }

}
