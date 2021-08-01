import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RaceResult, RaceResultsResponse } from 'src/app/definitions';
import { ImagesService } from '../../services/images.service';
import { RacesService } from '../../services/races.service';

@Component({
  selector: 'app-race-results-table',
  templateUrl: './race-results-table.component.html',
  styleUrls: [
    './race-results-table.component.scss',
    '../../stylesheets/tables.scss'
  ]
})
export class RaceResultsTableComponent implements OnInit, OnChanges {

  @Input() round: string;
  @Input() season: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  raceUrl: string;
  raceTime: string;
  raceDate: string;
  raceName: string;
  raceTrack: string;
  raceTrackUrl: string;

  pageSize: number = 0;
  pageSizeOptions: number[] = [];
  
  dataSize: number = 0;
  dataLoaded: boolean = false;
  dataLoading: boolean = false;
  dataRetrievalError: boolean = false;
  tableData: MatTableDataSource<RaceResult>;
  tableColumns: string[] = ['position', 'driver', 'time'];

  constructor(private races: RacesService, public images: ImagesService) {
    this.onRaceResultsError = this.onRaceResultsError.bind(this);
    this.onRaceResultsResponse = this.onRaceResultsResponse.bind(this);
  }

  private onRaceResultsError(error: any): void {
    this.dataLoading = false;
    this.dataRetrievalError = true;
  }

  private onRaceResultsResponse(response: any): void {
    response = response as RaceResultsResponse;

    const table = response.MRData.RaceTable.Races[0];

    if (table) {
      const circuit = table.Circuit;
      const results = table.Results;
      this.raceUrl = table.url;
      this.raceDate = table.date;
      this.raceTime = table.time;
      this.raceName = table.raceName;
      this.raceTrack = circuit.circuitName;
      this.raceTrackUrl = circuit.url;
      this.tableData = results;
      this.tableData.sort = this.sort;
      this.tableData.paginator = this.paginator;
      this.dataLoaded = true;
      this.dataLoading = false;
      return;
    }

    this.dataRetrievalError = true;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataLoaded = false;
    this.dataLoading = true;
    this.dataRetrievalError = false;
    this.round = changes.round?.currentValue ?? this.round;
    this.season = changes.season?.currentValue ?? this.season;
    this.races.getRaceResultsBySeason(this.season, this.round).subscribe(this.onRaceResultsResponse, this.onRaceResultsError);
  }

}
