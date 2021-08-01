import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DriverStanding, DriverStandingsList, DriverStandingsResponse, StandingsTable } from 'src/app/definitions';
import { DriversService } from '../../services/drivers.service';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-drivers-standings-table',
  templateUrl: './drivers-standings-table.component.html',
  styleUrls: [
    './drivers-standings-table.component.scss',
    '../../stylesheets/tables.scss'
  ]
})
export class DriversStandingsTableComponent implements OnInit, OnChanges {

  @Input() round: string;
  @Input() season: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSize: number = 20;
  dataLoaded: boolean = false;
  dataLoading: boolean = false;
  dataRetrievalError: boolean = false;
  tableData: MatTableDataSource<DriverStanding>;
  tableColumns: string[] = ['position', 'name', 'wins', 'points'];

  constructor(private drivers: DriversService, public images: ImagesService) {
    this.onDriverStandingsError = this.onDriverStandingsError.bind(this);
    this.onDriverStandingsResponse = this.onDriverStandingsResponse.bind(this);
  }

  private onDriverStandingsError(error: any) {
    this.dataLoading = false;
    this.dataRetrievalError = true;
  }

  private onDriverStandingsResponse(response: any) {
    response = response as DriverStandingsResponse;
    const table = response.MRData.StandingsTable as StandingsTable;
    const list = table.StandingsLists[0] as DriverStandingsList;

    if (list) {
      this.tableData = new MatTableDataSource<DriverStanding>(list.DriverStandings);
      this.tableData.sort = this.sort;
      this.tableData.paginator = this.paginator;
      this.dataLoaded = true;
      this.dataLoading = false;
      return;
    }

    this.dataRetrievalError = true;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataLoaded = false;
    this.dataLoading = true;
    this.dataRetrievalError = false;
    this.round = changes.round?.currentValue ?? this.round;
    this.season = changes.season?.currentValue ?? this.season;
    this.drivers.getDriverStandingsBySeason(this.season, this.round).subscribe(this.onDriverStandingsResponse, this.onDriverStandingsError);
  }

}
