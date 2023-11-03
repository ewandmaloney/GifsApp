import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/GifsResponse';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private gifService: GifsService){
  }

  @ViewChild('search')
  public tagInput!: ElementRef<HTMLInputElement>;


  searchTag() {
    const viewTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(viewTag);
    this.tagInput.nativeElement.value = '';
  }

  
}
