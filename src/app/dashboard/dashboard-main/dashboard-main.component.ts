import { CovidIndiaStatsService } from './../../api/covid-india-stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  totalCases: number;
  recoveredCases: number;
  deaths: number;
  newCases;
  newDeaths;
  activeCases: number;
  lastUpdated: Date;

  constructor(private covidIndiaStatsService: CovidIndiaStatsService) { }

  ngOnInit() {

    this.totalCases = 0;
    this.recoveredCases = 0;
    this.deaths = 0;
    this.activeCases = this.totalCases - this.recoveredCases - this.deaths;
    this.newCases = 0;
    this.newDeaths = 0;

    this.covidIndiaStatsService.getIndiaStats().subscribe((data) => {
      this.totalCases = data.response[0].cases.total;
      this.recoveredCases = data.response[0].cases.recovered;
      this.newCases = !!data.response[0].cases.new ? data.response[0].cases.new.substr(1, data.response[0].cases.new.length) : 0;
      this.deaths = data.response[0].deaths.total;
      this.newDeaths = !!data.response[0].deaths.new ? data.response[0].deaths.new.substr(1, data.response[0].cases.new.length) : 0;
      this.lastUpdated = data.response[0].time;
      this.activeCases = this.totalCases - this.recoveredCases - this.deaths;
    });

  }

}
