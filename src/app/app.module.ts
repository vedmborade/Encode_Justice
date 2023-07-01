import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CriticScoreComponent } from './critic-score/critic-score.component';
import { GenreComponent } from './genre/genre.component';
import { MpaaRatingComponent } from './mpaa-rating/mpaa-rating.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieYearComponent } from './movie-year/movie-year.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    GenreComponent,
    MpaaRatingComponent,
    CriticScoreComponent,
    MovieYearComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ApiService],
})
export class AppModule {}
