import { CovidWorldStatsService } from './../api/covid-world-stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-countries-stats',
  templateUrl: './all-countries-stats.component.html',
  styleUrls: ['./all-countries-stats.component.scss']
})
export class AllCountriesStatsComponent implements OnInit {

  shortWorldStats;
  worldStats;
  inputCountry = '';

  constructor(private covidWorldStatsService: CovidWorldStatsService) { }

  ngOnInit() {

    this.covidWorldStatsService.getWorldStats().subscribe((data: any) => {
      this.shortWorldStats = data.total;
      this.covidWorldStatsService.getWorldDetailedStats().subscribe((data) => {
        this.worldStats = data.response;
      });
    });

  }

  searchWorldStats() {
    console.log(this.inputCountry);
    this.covidWorldStatsService.getWorldDetailedStats().subscribe((data) => {
      this.worldStats = data.response;
      this.worldStats = this.worldStats.filter(p =>
        (p.country as string).toLowerCase().includes(this.inputCountry.toLowerCase())
      );
    });

  }

}
