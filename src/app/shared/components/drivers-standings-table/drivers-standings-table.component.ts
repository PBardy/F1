import { Component, OnInit } from '@angular/core';
import { DriverStanding, DriverStandings, GenericApiResponse } from 'src/app/definitions';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-drivers-standings-table',
  templateUrl: './drivers-standings-table.component.html',
  styleUrls: ['./drivers-standings-table.component.scss']
})
export class DriversStandingsTableComponent implements OnInit {

  tableData: DriverStanding[] = [];
  tableColumns: string[] = ['position', 'name', 'wins', 'points'];

  constructor(private driversService: DriversService) { }

  ngOnInit(): void {
    this.driversService.getDriverStandingsForCurrentYear().subscribe((response: any) => {
      response = response as GenericApiResponse;
      const standings = response.MRData as DriverStandings;
      const data = standings.StandingsTable.StandingsLists[0].DriverStandings;
      
      this.tableData = data;
    });
  }

}
