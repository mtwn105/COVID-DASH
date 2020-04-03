import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CovidStats } from '../model/india-stats-model';

@Injectable({
  providedIn: 'root'
})
export class CovidWorldStatsService {

  headers = {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': '3CbftiFEPCmshryjmKmOeKNNnD6gp1QoHOVjsngq2kXOynFU5F'
  };

  constructor(private http: HttpClient) { }

  getWorldStats() {
    return this.http.get('https://toibnews.timesofindia.indiatimes.com/TOIBNews/coronaextloader.htm');
  }

  getWorldDetailedStats(): Observable<CovidStats> {
    return this.http.get<CovidStats>('https://covid-193.p.rapidapi.com/statistics', {
      headers: this.headers
    });
  }


}
