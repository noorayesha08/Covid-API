import { Component, OnInit } from '@angular/core';
import { CovidlistService } from '../services/covidlist.service';
import { Covidlist } from './covidlist';

@Component({
  selector: 'app-covidlist',
  templateUrl: './covidlist.component.html',
  styleUrls: ['./covidlist.component.css']
})
export class CovidlistComponent implements OnInit {

  patients:any;
  constructor(private service:CovidlistService) { }

  ngOnInit(): void
  {
    let response = this.service.getCovidList();
    response.subscribe((data) => this.patients = data);
  }

}
