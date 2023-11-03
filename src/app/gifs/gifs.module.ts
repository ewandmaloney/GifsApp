import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CardListComponent,
    GifsCardComponent
  ],
  exports:[HomePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ]
})
export class GifsModule { }
