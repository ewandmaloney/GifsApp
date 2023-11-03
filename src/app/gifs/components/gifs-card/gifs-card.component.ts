import { Component, Input, OnInit, Output} from '@angular/core';
import { Gif } from '../../interfaces/GifsResponse';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit{

  @Input() gif!: Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif is required.');
  }

}
