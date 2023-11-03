import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input() url!: string;
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL is required');
  }

  onLoad(){
    this.hasLoaded = true;
  }

}
