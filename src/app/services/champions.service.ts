import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private http = inject(HttpClient);
  private url = "https://lol2-4vk5.onrender.com";

  getAllChampions(): Observable<any> {
    return this.http.get(`${this.url}/champions`);
  }

  getChampionsById(id: string): Observable<any> {
    return this.http.get(`${this.url}/champions/${id}`);
  }
}