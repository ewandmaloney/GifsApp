import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  @ViewChild('search')
  public tagInput!: ElementRef<HTMLInputElement>;


  searchTag() {
    const viewTag = this.tagInput.nativeElement.value;

    console.log({viewTag})
  }
}
