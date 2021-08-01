import { Time } from "@angular/common";

export type GenericApiResponse = {
  MRData: MRData;
};

export type MRData = {
  url: string;
  limit: string;
  offset: string;
  series: string;
  total: string;
  xlmns: string;
};

export type ScheduledEvent = {

};

export type Driver = {
  url: string;
  code: string;
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  permanentNumber: string;
};

export type Constructor = {
  url: string;
  name: string;
  nationality: string;
  constructorId: string;
};

export type DriverStanding = {
  Driver: Driver;
  Constructors: Constructor[];
  points: string;
  position: string;
  positionText: string;
  wins: string;
};

export type ConstructorStanding = {

};

export type StandingsList = {
  round: string;
  season: string;
};

export type DriverStandingsList = StandingsList & {
  DriverStandings: DriverStanding[];
};

export type ConstructorStandingsList = StandingsList & {
  ConstructorStandings: ConstructorStanding[];
};

export type StandingsTable = {
  round: string;
  season: string;
  StandingsLists: (DriverStandingsList | ConstructorStandingsList)[];
};

export type Location = {
  lat: string;
  long: string;
  country: string;
  locality: string;
};

export type Circuit = {
  url: string;
  Location: Location;
  circuitId: string;
  circuitName: string;
};

export type Speed = {
  units: string;
  speed: string;
};

export type Lap = {
  Time: Time;
  lap: string;
  rank: string;
  AverageSpeed: Speed;
};

export type RaceResult = {
  Constructor: Constructor;
  Driver: Driver;
  FastestLap: Lap;
  Time: Time;
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
};

export type Race = {
  Circuit: Circuit;
  Results: RaceResult[];
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
};

export type RaceTable = {
  round: string;
  season: string;
  Races: Race[];
};

export interface DriverStandings extends MRData {
  StandingsTable: StandingsTable;
}

export interface ConstructorStandings extends MRData {
  StandingsTable: StandingsTable;
}

export interface RaceStandings extends MRData {
  RaceTable: RaceTable;
}


/**
 * Seasons Response
 */

export type SeasonsResponse = {
  MRData: SeasonsData;
};

export type SeasonsData = {
  url: string;
  limit: string;
  offset: string;
  series: string;
  total: string;
  SeasonTable: SeasonTable;
};

export type SeasonTable = {
  Seasons: Season[];
};

export type Season = {
  url: string;
  season: string;
};

/**
 * Season Response
 */

export type SeasonResponse = {
  MRData: RaceTable;
};

/**
 * Last Round Response
 */

export type LastRoundResponse = {
  MRData: RaceTable;
};

/**
 * Driver Standings Response
 */

export type DriverStandingsResponse = {
  MRData: StandingsTable;
};

/**
 * Constructor Standings Response
 */

 export type ConstructorStandingsResponse = {
  MRData: StandingsTable;
};