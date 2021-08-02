import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {

  constructor(private api: ApiService) { }

  getCircuitsBySeason(season: string) {
    return this.api.get(`${season}/circuits`);
  }

  getCircuitBySeason(season: string, round: string) {
    return this.api.get(`${season}/${round}/circuits`);
  }

  getCircuitById(id: string) {
    return this.api.get(`circuits/${id}`);
  }

}
