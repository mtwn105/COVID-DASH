import {
  Statewise,
  Casestimesery
} from './../../model/india-state-wise-stats-model';
import { CovidIndiaStatsService } from './../../api/covid-india-stats.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-state-wise-stats',
  templateUrl: './state-wise-stats.component.html',
  styleUrls: ['./state-wise-stats.component.scss']
})
export class StateWiseStatsComponent implements OnInit {
  allData;

  stateChartData = {};
  stateStatsData;
  stateStatsChartsData;
  dayChartData = {};
  dayStatsData;
  dayDailyChartData = {};
  dayDailyStatsData;

  constructor(private covidIndiaStatsService: CovidIndiaStatsService) { }

  ngOnInit() {
    this.covidIndiaStatsService.getStateWiseStats().subscribe(data => {
      this.allData = data;
      this.stateStatsData = data.statewise;
      this.dayStatsData = data.cases_time_series;
      this.fillChartData();
    });
  }

  fillChartData() {
    const states = [];
    const stateConfirmedCases = [];
    const stateRecoveries = [];
    const stateDeaths = [];

    this.stateStatsChartsData = [];
    (this.stateStatsData as any[]).map((state: Statewise, index) => {
      if (index != 0) {
        states.push({
          label: state.state
        });

        stateConfirmedCases.push({
          value: state.confirmed
        });
        stateRecoveries.push({
          value: state.recovered
        });
        stateDeaths.push({
          value: state.deaths
        });
      }
    });

    this.stateChartData = {
      chart: {
        xAxisName: 'State',
        yAxisName: 'Confirmed Cases',
        theme: 'fusion',
        labelFontSize: 10,
        labelDisplay: 'WRAP'
      },
      categories: [
        {
          category: states
        }
      ],
      dataset: [
        {
          seriesname: 'Confirmed Cases',
          data: stateConfirmedCases
        },
        {
          seriesname: 'Recoveries',
          data: stateRecoveries
        },
        {
          seriesname: 'Total Deaths',
          data: stateDeaths
        }
      ]
    };

    const dates = [];
    const confirmedCases = [];
    const recoveries = [];
    const deaths = [];
    const dailyConfirmedCases = [];
    const dailyRecoveries = [];
    const dailyDeaths = [];

    (this.dayStatsData as any[]).map((day: Casestimesery, index) => {
      if (index != this.dayStatsData.length - 1) {
        dates.push({
          label: day.date
        });

        confirmedCases.push({
          value: day.totalconfirmed
        });
        recoveries.push({
          value: day.totalrecovered
        });
        deaths.push({
          value: day.totaldeceased
        });
        dailyConfirmedCases.push({
          value: day.dailyconfirmed
        });
        dailyRecoveries.push({
          value: day.dailyrecovered
        });
        dailyDeaths.push({
          value: day.dailydeceased
        });
      } else {
        dates.push({
          label: day.date
        });

        confirmedCases.push({
          value: this.stateStatsData[0].confirmed
        });
        recoveries.push({
          value: this.stateStatsData[0].recovered
        });
        deaths.push({
          value: this.stateStatsData[0].deaths
        });
        dailyConfirmedCases.push({
          value: this.stateStatsData[0].delta.confirmed
        });
        dailyRecoveries.push({
          value: this.stateStatsData[0].delta.recovered
        });
        dailyDeaths.push({
          value: this.stateStatsData[0].delta.deaths
        });
      }
    });

    this.dayChartData = {
      chart: {
        theme: 'fusion',
        xAxisName: 'Date',
        showValues: false,
        anchorRadius: 2
      },
      categories: [
        {
          category: dates
        }
      ],
      dataset: [
        {
          seriesname: 'Total Deaths',
          data: deaths
        },
        {
          seriesname: 'Recoveries',
          data: recoveries
        },
        {
          seriesname: 'Confirmed Cases',
          data: confirmedCases
        }
      ]
    };

    this.dayDailyChartData = {
      chart: {
        theme: 'fusion',
        xAxisName: 'Date',
        showValues: false
      },
      categories: [
        {
          category: dates
        }
      ],
      dataset: [
        {
          seriesname: 'Total Deaths',
          data: dailyDeaths
        },
        {
          seriesname: 'Recoveries',
          data: dailyRecoveries
        },
        {
          seriesname: 'Confirmed Cases',
          data: dailyConfirmedCases
        }
      ]
    };
  }
}
