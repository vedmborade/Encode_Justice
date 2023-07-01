import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpaa-rating',
  templateUrl: './mpaa-rating.component.html',
  styleUrls: ['./mpaa-rating.component.css']
})
export class MpaaRatingComponent implements OnInit, OnChanges {
  private POSSIBLE_RATINGS = ['G', 'PG', 'PG-13', 'R'];

  // this value is passed in from the parent component - AppComponent in app.component.ts
  @Input() movieRating: string;

  // we are setting default values here, but notice the user can change these values by
  // selecting a different rating and by searching a movie
  private preferredRating: string = 'R';
  public isGoodRating: boolean = true;

  constructor() {}

  ngOnInit() {}

  // anytime the Input is changed, this function is called automatically! Thanks Angular!
  ngOnChanges() {
    this.checkRating();
  }

  // this function checks to make sure the movie we searched has an appropriate rating for us
  checkRating() {
    const maxRatingIndex = this.POSSIBLE_RATINGS.indexOf(this.preferredRating);
    if (this.POSSIBLE_RATINGS.indexOf(this.movieRating) > maxRatingIndex) {
      this.isGoodRating = false;
    } else {
      this.isGoodRating = true;
    }

    // when you preview the application, hit F12 to open the developer tools and see these console messages
    console.log('Good MPAA Rating? : ' + this.isGoodRating);
  }
}
