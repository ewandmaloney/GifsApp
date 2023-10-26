import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './shared-sidebar.component.html',
  styleUrls: ['./shared-sidebar.component.css']
})
export class SharedSidebarComponent {

  public items: string[] = [];

  constructor(private gifServ: GifsService) {

  }
  get tags() {
    return this.gifServ.tagsHistory;
  }
}
