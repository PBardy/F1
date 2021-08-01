import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConstructorStanding, ConstructorStandings, ConstructorStandingsList, ConstructorStandingsResponse, GenericApiResponse, StandingsList, StandingsTable } from 'src/app/definitions';
import { ConstructorsService } from '../../services/constructors.service';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-constructors-standings-table',
  templateUrl: './constructors-standings-table.component.html',
  styleUrls: [
    './constructors-standings-table.component.scss',
    '../../stylesheets/tables.scss'
  ]
})
export class ConstructorsStandingsTableComponent implements OnInit {

  @Input() round: string;
  @Input() season: string;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSize: number = 0;
  pageSize: number = 0;
  pageSizeOptions: number[] = [];

  dataLoaded: boolean = false;
  dataLoading: boolean = false;
  dataRetrievalError: boolean = false;

  tableData: MatTableDataSource<any>;
  tableColumns: string[] = ['position', 'name', 'points'];

  constructor(private constructors: ConstructorsService, public images: ImagesService) {
    this.onConstructorStandingsError = this.onConstructorStandingsError.bind(this);
    this.onConstructorStandingsResponse = this.onConstructorStandingsResponse.bind(this);
  }

  private onConstructorStandingsError(error: any) {
    this.dataLoading = false;
    this.dataRetrievalError = true;
  }

  private onConstructorStandingsResponse(response: any) {
    response = response as ConstructorStandingsResponse;
    const table = response.MRData.StandingsTable as StandingsTable;
    const list = table.StandingsLists[0] as ConstructorStandingsList;

    if (list) {
      this.tableData = new MatTableDataSource<any>(list.ConstructorStandings);
      this.tableData.sort = this.sort;
      this.tableData.paginator = this.paginator;
      this.dataLoaded = true;
      this.dataLoading = false;
      this.dataSize = this.tableData.data.length;
      this.updatePageSize();
      this.updatePageSizeOptions();
      return;
    }

    this.dataRetrievalError = true;
  }

  private updatePageSize() {
    this.pageSize = this.dataSize;
  }

  private updatePageSizeOptions() {
    const min = Math.min(this.pageSize, 5);
    const size = Math.floor(this.pageSize / 5); 
    const options = [min];
    for (let option = 0; min < size; option++) {
      options.push(option * 5);
    }

    this.pageSizeOptions = options;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataLoaded = false;
    this.dataLoading = true;
    this.dataRetrievalError = false;
    this.round = changes.round?.currentValue ?? this.round;
    this.season = changes.season?.currentValue ?? this.season;
    this.constructors.getConstructorStandingsBySeason(this.season, this.round).subscribe(this.onConstructorStandingsResponse, this.onConstructorStandingsError);
  }

}
