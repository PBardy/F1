
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

export type StandingsList = {
  round: string;
  season: string;
  DriverStandings: DriverStanding[];
};

export type StandingsTable = {
  round: string;
  season: string;
  StandingsLists: StandingsList[];
};

export interface DriverStandings extends MRData {
  StandingsTable: StandingsTable;
}