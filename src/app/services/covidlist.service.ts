import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Covidlist } from '../covidlist/covidlist';

@Injectable({
  providedIn: 'root'
})
export class CovidlistService {

  constructor(private http:HttpClient) { 

  }

  getCovidList()
  {
    return this.http.get("https://api.covidtracking.com/v1/states/current.json");
  }
}
