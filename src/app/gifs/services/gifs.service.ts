import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Gif, GifsResponse } from '../interfaces/GifsResponse';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifs: Gif[] = [];
  private _tagsHistory: string[] = [];
  private baseUrl: string = 'http://api.giphy.com/v1/gifs/search';
  private API_KEY: string = 'wC5b9Qs85TSnjX5jf8IHx3v9PU1ZjvI5';

  constructor(private http: HttpClient) {
    this.leerLocalStorage();
  }

  getGifs(query: string) {
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('q', query)
      .set('limit', '10');

    return this.http.get<GifsResponse>(`${this.baseUrl}`, { params: params }).subscribe(res => {
      this.gifs = res.data;
    })
  }

  guardarQueryLocalStorage() {
    localStorage.setItem("history", JSON.stringify(this._tagsHistory));
  }

  leerLocalStorage() {
    if (!localStorage.getItem("history")) {
      return;
    }
    this._tagsHistory = JSON.parse(localStorage.getItem("history")!);
    this.searchTag(this._tagsHistory[0]);
  }


  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(item => item !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.guardarQueryLocalStorage();
  }

  searchTag(tag: string): void {
    if (tag.length === 0) {
      return;
    }
    this.organizeHistory(tag);
    this.getGifs(tag);
  }


}

