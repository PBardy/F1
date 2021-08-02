import { Component, OnInit } from '@angular/core';
import { Race, RaceTable, Season, SeasonResponse } from 'src/app/definitions';
import { ScheduleService } from 'src/app/shared/services/schedule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Seasons information
  season: string;
  seasons: Season[] = [];
  seasonsLoaded: boolean = false;
  seasonsLoading: boolean = false;
  firstSeason: Season;
  latestSeason: Season;
  selectedSeason: string = "2021";

  // Rounds information
  round: string;
  rounds: string[] = [];
  roundsLoaded: boolean = false;
  roundsLoading: boolean = false;
  firstRound: string = "1";
  latestRound: string = "1";
  selectedRound: string = "1";

  constructor(private schedule: ScheduleService) { }

  private populateSeasons() {
    this.seasons = [];
    this.seasonsLoading = true;
    this.schedule.seasons.subscribe((response: Season[]) => {
      if (!response) return;
      if (!response.length) return;
      this.seasons = response;
      this.seasonsLoaded = true;
      this.seasonsLoading = false;
      this.firstSeason = this.seasons[0];
      this.latestSeason = this.seasons[this.seasons.length - 1];
      this.season = this.latestSeason.season;
      this.populateRounds();
    });
  }

  private populateRounds() {
    this.rounds = [];
    this.roundsLoading = true;
    this.schedule.getSeason(this.season).subscribe((response: any) => {
      response = response as SeasonResponse;
      const races = response.MRData.RaceTable.Races;
      if (!races) return;
      if (!races.length) return;
      this.roundsLoaded = true;
      this.roundsLoading = false;
      this.rounds = races.map((race: Race) => race.round);
    });
  }

  private populateLastRound() {
    this.schedule.lastRound.subscribe((response: any) => {
      response = response as RaceTable;
      if (!response) return;
      this.latestRound = response.round;
      this.selectedRound = response.round;
    });
  }

  onRoundChange(event: any) {
    this.round = event.value;
    this.selectedRound = event.value;
  }

  onSeasonChange(event: any) {
    this.season = event.value;
    this.selectedSeason = event.value;
    this.populateRounds();
  }

  ngOnInit(): void {
    this.populateSeasons();
    this.populateLastRound();
  }

}
