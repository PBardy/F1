import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {

  constructor(private api: ApiService) { }

  /**
   * Return all the circuits that were part of the F1 grand prix
   * circuit in a given season.
   *
   * @param season
   * @returns
   */
  getCircuitsBySeason(season: string) {
    return this.api.get(`${season}/circuits`);
  }

  /**
   * Return all the circuits that were part of the F1 grand prix
   * circuit in a given season that a particular driver drove on.
   *
   * @param season
   * @param driverId
   */
  getCircuitsBySeasonAndDriver(season: string, driverId: string) {

  }

  /**
   * Return all the circuits that a particular driver has driven on.
   *
   * @param driverId
   */
  getCircuitsByDriver(driverId: string) {

  }

  /**
   *  Return all the circuits driven by a particular constructor.
   *
   * @param constructorId
   */
  getCircuitsByConstructor(constructorId: string) {

  }

  /**
   * Get the circuit that was used as part of the grand prix
   * for the provided season and round.
   *
   * @param season
   * @param round
   * @returns
   */
  getCircuitBySeason(season: string, round: string) {
    return this.api.get(`${season}/${round}/circuits`);
  }

  getCircuitById(id: string) {
    return this.api.get(`circuits/${id}`);
  }

  getCircuitRacesBySeason(season: string) {

  }

  getCircuitDriverStandingsBySeason(season: string) {

  }

}
