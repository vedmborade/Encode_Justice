import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-year',
  templateUrl: './movie-year.component.html',
  styleUrls: ['./movie-year.component.css']
})
export class MovieYearComponent implements OnInit {

  @Input() movieYear: number;
  constructor() { }

  ngOnInit() {
  }

}