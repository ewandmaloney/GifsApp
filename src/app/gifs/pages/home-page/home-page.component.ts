import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/GifsResponse';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{


  constructor(private gifServ: GifsService){

  }

  get gifs(): Gif[]{
    return this.gifServ.gifs;
  }
  

  ngOnInit(): void {
  }



}
