import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/GifsResponse';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() gifs: Gif[] = [];

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
