import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RaceResult, RaceStandings } from 'src/app/definitions';
import { ImagesService } from '../../services/images.service';
import { RacesService } from '../../services/races.service';

@Component({
  selector: 'app-last-race-table',
  templateUrl: './last-race-table.component.html',
  styleUrls: [
    './last-race-table.component.scss',
    '../../stylesheets/tables.scss'
  ]
})
export class LastRaceTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  round: string;
  season: string;
  raceTime: string;
  raceDate: string;
  raceName: string;
  raceTrack: string;
  raceTrackUrl: string;

  dataSize: number = 10;
  tableData: MatTableDataSource<RaceResult>;
  tableColumns: string[] = ['position', 'driver', 'time'];

  constructor(private races: RacesService, public images: ImagesService) { }

  private getLastRaceResults() {
    this.races.getLastRaceResults().subscribe((response: any) => {
      const standings = response.MRData as RaceStandings;
      const races = standings.RaceTable.Races;
      const race = races[0];
      this.round = race.round;
      this.season = race.season;
      this.raceTime = race.time.substring(0, race.time.length - 4);
      this.raceDate = race.date;
      this.raceName = race.raceName;
      this.raceTrack = race.Circuit.circuitName;
      this.raceTrackUrl = race.Circuit.url;
      this.tableData = new MatTableDataSource<RaceResult>(race.Results);
      this.tableData.sort = this.sort;
      this.tableData.paginator = this.paginator;
    }); 
  }

  ngOnInit(): void {
    this.getLastRaceResults();
  }

}
