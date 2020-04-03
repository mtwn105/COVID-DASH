import { IndiaStats } from './../model/india-state-wise-stats-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidStats } from '../model/india-stats-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidIndiaStatsService {

  headers = {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '3CbftiFEPCmshryjmKmOeKNNnD6gp1QoHOVjsngq2kXOynFU5F'
  };

  constructor(private http: HttpClient) { }


  getIndiaStats(): Observable<CovidStats> {
    return this.http.get<CovidStats>('https://covid-193.p.rapidapi.com/statistics?country=india', {
      headers: this.headers
    });
  }

  getStateWiseStats(): Observable<IndiaStats> {
    return this.http.get<IndiaStats>('https://api.covid19india.org/data.json');
  }

  getDayWiseStats() {
    return this.http.get('https://api.jsonbin.io/b/5e7cb870862c46101abe75c7', {
      headers: {
        'secret-key': '$2b$10$BGB5UqSPvkLsZg4BSB.DKe6icsxe9R61xAA8nKXqXAlA7t9.PckRi'
      }
    });
  }

}
